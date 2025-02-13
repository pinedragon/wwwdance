import ArrowTitleHolder from "../shared/ArrowTitleHolder";
import styles from "./styles.module.scss";
import EventByMonth from "./components/EventByMonth";

import { competitions } from "../../data/competitionsData.json";
import { useMemo } from "react";

const Competitions: React.FC = () => {
  const useMonthImages = (month: string) => {
    return useMemo(
      () =>
        competitions
          .filter((event) =>
            event.date.toUpperCase().includes(month.toUpperCase())
          )
          .map((event) => event.imgSrc),
      [month] // Recomputes only when month changes
    );
  };

  return (
    <div className={styles.competitionsHolder}>
      <ArrowTitleHolder title="Upcoming events" />
      <EventByMonth month="March" events={useMonthImages("MARCH")} />
      <EventByMonth month="April" events={useMonthImages("APRIL")} />
      <EventByMonth month="May" events={useMonthImages("MAY")} />
    </div>
  );
};

export default Competitions;
