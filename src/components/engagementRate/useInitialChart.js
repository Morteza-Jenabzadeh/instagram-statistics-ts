import React, { useEffect } from "react";
const generateRandomNumber = (length = 1) => {
  const array = Array(length).fill(1);

  array.forEach(
    (value, index) => (array[index] = Math.round(Math.random() * 10))
  );
  return array;
};
export const useInitialChart = (edges, setData) => {
  useEffect(() => {
    setData({
      labels: Array(edges?.length).fill(""),
      datasets: [
        {
          label: "",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 5,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 5,
          pointRadius: 5,
          pointHitRadius: 5,
          data: generateRandomNumber(edges?.length),
        },
      ],
    });
  }, [edges]);
};
