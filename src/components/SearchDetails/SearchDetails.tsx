import { useRef } from "react";
import { IoMdPlay } from "react-icons/io";
import { useDispatch } from "react-redux";
import { searchWords } from "../../redux/DictionaryAction";
import { RootStore } from "../../redux/store";
import { Definition, Meaning, Phonetic, SearchState } from "../../types";
import styles from "./SearchDetails.module.scss";
import landing from "../../images/dictionaryLanding.png";

interface SearchDetailsProps {
  data: RootStore["dictionary"]["search"];
  errorMessage: RootStore["dictionary"]["error"];
}

const SearchDetails: React.FC<SearchDetailsProps> = ({
  data,
  errorMessage,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useDispatch();

  return (
    <div className={styles.SearchDetails}>
      {errorMessage ? (
        <div className={styles.SearchDetails_error}>
          <h1 className={styles.SearchDetails_error_text}>{errorMessage}</h1>
          <img
            src={landing}
            alt="ooops img"
            className={styles.SearchDetails_error_img}
          />
        </div>
      ) : (
        <>
          {data &&
            data?.map((item: SearchState, index: number) => {
              const { word, meanings, phonetics } = item;
              return (
                <div className={styles.SearchDetails} key={index}>
                  <h1 className={styles.SearchDetails_title}>{word}</h1>

                  <hr />
                  {phonetics.map((phonetic: Phonetic, index: number) => {
                    const { text, audio } = phonetic;
                    return (
                      <div
                        className={styles.SearchDetails_phonetic}
                        key={index}
                      >
                        <div className="text">Pronounciation: {text} </div>
                        <div className="audio">
                          <audio ref={audioRef} src={audio}></audio>
                          <IoMdPlay
                            onClick={() => audioRef.current?.play()}
                            className={styles.SearchDetails_play}
                          />
                        </div>
                      </div>
                    );
                  })}
                  <hr />
                  {meanings?.map((meaning: Meaning, index: number) => {
                    const { partOfSpeech, definitions } = meaning;
                    return (
                      <div key={index}>
                        <h3>
                          Part Of Speech: <span>{partOfSpeech}</span>
                        </h3>
                        {definitions &&
                          definitions.map((item: Definition, index: number) => {
                            const { definition, synonyms } = item;
                            return (
                              <div className="definition" key={index}>
                                <h3>
                                  Definition: <i>{definition}</i>
                                </h3>
                                <div className={styles.SearchDetails_synonyms}>
                                  Synonyms:{" "}
                                  {synonyms ? (
                                    synonyms.map(
                                      (synonym: string, index: number) => {
                                        return (
                                          <i
                                            onClick={() =>
                                              dispatch(searchWords(synonym))
                                            }
                                            key={index}
                                          >
                                            {synonym},{" "}
                                          </i>
                                        );
                                      }
                                    )
                                  ) : (
                                    <p
                                      className={
                                        styles.SearchDetails_no_synonyms
                                      }
                                    >
                                      no synonym(s) found
                                    </p>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        <hr />
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </>
      )}
    </div>
  );
};

export default SearchDetails;
