import React from "react";
import { useSelector } from "react-redux";
import Banner from "../../components/Banner/Banner";
import Search from "../../components/Search/Search";
import SearchDetails from "../../components/SearchDetails/SearchDetails";
import { RootStore } from "../../redux/store";
import styles from "./Home.module.scss";
import spinner from "../../images/spinner.gif";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

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
