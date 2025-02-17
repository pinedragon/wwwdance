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
        <video autoPlay loop muted controls className={styles.mainVideo}>
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
      <div className={styles.quote}>
        <div>
          <span>"{quote.q1}" </span>
          <br />
          <span className={styles.writer}> - {quote.q1w}</span>
        </div>
      </div>
      {/* Image Slider */}
      <Slider />
    </div>
  );
};

export default HomePage;
