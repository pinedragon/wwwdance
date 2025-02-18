import React from "react";
import styles from "./styles.module.scss";
import { quote } from "../../const/global";
import ArrowTitleHolder from "../shared/ArrowTitleHolder";
import EventByMonth from "../Competitions/components/EventByMonth";
import { competitions } from "../../data/competitionsData.json";
import Slider from "./Slider";

export const HomePage: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainPhoto}>
        <video
          autoPlay
          loop
          muted
          controls
          playsInline
          className={styles.mainVideo}
        >
          <source src="/wwwdance/assets/homepagevideo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Upcoming events */}
      <ArrowTitleHolder title="Upcoming events" />
      <EventByMonth
        events={competitions.map((competition) => {
          return competition.imgSrc;
        })}
      />

      {/* Quote */}
      <div className={styles.quoteWrapper}>
        <div className={styles.quote}>"{quote.q1}" </div>
        <div className={styles.writer}> - {quote.q1w}</div>
      </div>
      {/* Image Slider */}
      <Slider />
    </div>
  );
};

export default HomePage;
