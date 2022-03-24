import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchWords } from "../../redux/DictionaryAction";
import { GoSearch } from "react-icons/go";
import cx from "classnames";
import styles from "./Search.module.scss";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import SpeechRecognition from "react-speech-recognition";

interface SearchProps {
  listening: boolean;
  transcript: string;
  SpeechRecognition: SpeechRecognition;
  browserSupportsSpeechRecognition: boolean;
}

const Search: React.FC<SearchProps> = ({
  listening,
  transcript,
  SpeechRecognition,
  browserSupportsSpeechRecognition,
}) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const { startListening } = SpeechRecognition;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      dispatch(searchWords(query));
      setQuery("");
    }
  };

  React.useEffect(() => {
    if (transcript) {
      setQuery(transcript);
    }
  }, [transcript]);

  return (
    <div className={styles.Search}>
      <form onSubmit={handleSearch}>
        <input
          placeholder="...search words"
          value={query}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setQuery(e.currentTarget.value)
          }
        />
        <button type="submit" className={styles.Search_btn}>
          <GoSearch />
        </button>
      </form>
      {browserSupportsSpeechRecognition ? (
        <FaMicrophone
          className={cx(styles.Search_mic, {
            [styles.Search_mic_listen]: listening,
          })}
          onClick={() => startListening()}
        />
      ) : (
        <FaMicrophoneSlash className={styles.Search_mic} />
      )}
    </div>
  );
};

export default Search;
