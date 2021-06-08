import { useRef } from "react";
import { IoMdPlay } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { searchWords } from "../../redux/DictionaryAction";
import { RootStore } from "../../redux/store";
import { SearchState } from "../../redux/types";
import spinner from "../../images/spinner.gif";
import landing from "../../images/dictionaryLanding.png";
import "./searchDetails.scss";

interface Meaning {
  partOfSpeech: string;
  definitions: {
    definition: string;
    synonyms: string[];
  }[];
}

interface Definition {
  definition: string;
  synonyms: string[];
}

interface Phonetic {
  text: string;
  audio: string;
}

const SearchDetails = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const words = useSelector((state: RootStore) => state.dictionary.search);
  const loading = useSelector((state: RootStore) => state.dictionary.loading);
  const errMSg = useSelector((state: RootStore) => state.dictionary.error);
  const dispatch = useDispatch();

  if (loading) {
    return (
      <div className="loading">
        <img src={spinner} alt="loading img" />
      </div>
    );
  }

  if (!words) {
    return (
      <div className="landing">
        <img src={landing} alt="" />
      </div>
    );
  }

  return (
    <div>
      {errMSg}
      {words?.map((item: SearchState, index: number) => {
        const { word, meanings, phonetics } = item;
        return (
          <div className="search-details" key={index}>
            <div className="search-title">
              <h1>{word}</h1>
            </div>
            <hr />
            {phonetics.map((phonetic: Phonetic, index: number) => {
              const { text, audio } = phonetic;
              return (
                <div className="phonetic" key={index}>
                  <div className="text">Pronounciation: {text} </div>
                  <div className="audio">
                    <audio ref={audioRef} src={audio}></audio>
                    <IoMdPlay
                      onClick={() => audioRef.current?.play()}
                      className="play-btn"
                    />
                  </div>
                </div>
              );
            })}
            <hr />
            {meanings.map((meaning: Meaning, index: number) => {
              const { partOfSpeech, definitions } = meaning;
              return (
                <div className="search-meaning" key={index}>
                  <div className="part-of-speech">
                    <h3>
                      Part Of Speech: <span>{partOfSpeech}</span>
                    </h3>
                  </div>
                  {definitions &&
                    definitions.map((item: Definition, index: number) => {
                      const { definition, synonyms } = item;
                      return (
                        <div className="definition" key={index}>
                          <h3>
                            Definition: <i>{definition}</i>
                          </h3>
                          <div className="synonyms">
                            Synonyms:{" "}
                            {synonyms ? (
                              synonyms.map((synonym: string, index: number) => {
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
                              })
                            ) : (
                              <p className="no-synonyms">no synonym(s) found</p>
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
    </div>
  );
};

export default SearchDetails;
