import React from "react";
import { useSelector } from "react-redux";
import SearchDetails from "../../components/SearchDetails/SearchDetails";
import { RootStore } from "../../redux/store";
import styles from "./Home.module.scss";
import spinner from "../../images/spinner.gif";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Banner from "../../components/banner";
import Search from "../../components/search";

const Home = () => {
  const data = useSelector((state: RootStore) => state.dictionary);

  const { listening, transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  return (
    <div className={styles.Home}>
      <Banner />
      <div className={styles.Home_container}>
        <Search
          listening={listening}
          transcript={transcript}
          SpeechRecognition={SpeechRecognition}
          browserSupportsSpeechRecognition={browserSupportsSpeechRecognition}
        />
        {data.loading ? (
          <div className={styles.Home_loading}>
            <img src={spinner} alt="loading img" />
          </div>
        ) : (
          <SearchDetails data={data.search} errorMessage={data.error} />
        )}
      </div>
    </div>
  );
};

export default Home;
