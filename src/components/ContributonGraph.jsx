import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const ContributionHeatmap = () => {
  const values = [
    { date: "2023-06-01", count: 5 },
    { date: "2023-06-02", count: 3 },
    { date: "2023-06-03", count: 10 },
    { date: "2023-06-04", count: 3 },
    // ...
  ];

  return (
    <div>
      <CalendarHeatmap
        startDate={new Date("2023-01-01")}
        endDate={new Date("2023-12-31")}
        values={values}
        showOutsideRange={false}
        gutterSize={2}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-gitlab-${value.count}`;
        }}
      />
    </div>
  );
};

export default ContributionHeatmap;
