import React from "react";
import styles from "./styles.module.scss";
import { quote } from "../../const/global";
import ArrowTitleHolder from "../shared/ArrowTitleHolder";
import EventByMonth from "../Competitions/components/EventByMonth";
import { competitions } from "../../data/competitionsData.json";

export const HomePage: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainPhoto}>
        <img src="/wwwdance/assets/GirlDancing.png" alt="main-photo" />
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
      {/* <Slider /> */}
    </div>
  );
};

export default HomePage;
