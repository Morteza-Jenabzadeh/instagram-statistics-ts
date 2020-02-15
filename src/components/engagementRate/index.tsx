import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./engagement.style";
import Card from "./card";
const generateRandomNumber = (length = 1) => {
  const array = Array(length).fill(1);

  array.forEach((value, index) =>
    array[index] = Math.round((Math.random() * 10))
  );
  return (array);
}


interface IProp {
  dataSource: { [key: string]: any }
}
interface ITooltip {
  [key: string]: any
}
const EngagementRate: React.FC<IProp> = (prop) => {
  const { dataSource } = prop;
  const classes = useStyles();
  const edges = dataSource && dataSource.edges;


  const [data, setData] = useState({})
  interface IState {
    top?: number;
    left?: number;
    data?: any;
    showTooltip: boolean;
    node?: number;
    tooltip: any
  }
  const [state, setState] = React.useState<IState>({
    top: 0,
    left: 0,
    data: "",
    showTooltip: false,
    node: 0,
    tooltip: undefined
  });




  const showTooltip = (tooltip: ITooltip) => {


    if (tooltip.opacity === 0) {
      setState({
        showTooltip: false,
        tooltip: undefined
      })
    } else {
      setState({
        ...state,
        top: tooltip.caretY - 400,
        left: tooltip.caretX + 20,
        data: "payload.date",
        showTooltip: true,
        node: tooltip.dataPoints[0].index
      });
    }
  }
  const hide = () => {
    if (state.showTooltip) {
      setState({
        showTooltip: false,
        tooltip: undefined
      })
    }
  }
  const options = {
    onHover: hide,
    tooltips: {
      enabled: false,
      custom: showTooltip,
    },
    mode: "index"

  }
  useEffect(() => {
    if (!dataSource) {
      return
    }
    setData({
      labels: Array(edges.length).fill(""),
      datasets: [
        {
          label: '',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 5,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 5,
          pointRadius: 5,
          pointHitRadius: 5,
          data: generateRandomNumber(edges.length)
        }
      ]
    })
  }, [dataSource])

  if (!dataSource) {
    return (
      <></>
    )
  }

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center" spacing={2}
        className={classes.engagementWrapper}
      >
        <h2 className={classes.headTitle}>EngagementRate</h2>
        <Grid container direction="column" item xs={6}>
          <Line data={data} options={options}

          />
          <div style={{ position: "relative" }}>

            {state.showTooltip
              ? <div
                style={{
                  position: 'absolute',
                  color: 'white',
                  backgroundColor: 'rebeccapurple',
                  top: state.top,
                  left: state.left,
                }}
              >
                <Card url={edges[(state.node as number)].node.display_url}
                  like={edges[(state.node as number)].node.edge_liked_by.count}
                  comment={edges[(state.node as number)].node.edge_media_to_comment.count}
                />
              </div>
              : null
            }
          </div>
        </Grid>
      </Grid>

    </>
  );

};

export default EngagementRate;
