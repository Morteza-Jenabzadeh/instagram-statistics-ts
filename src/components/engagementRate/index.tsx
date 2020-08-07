import React, { useCallback, useState } from "react";
import { Line } from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./engagement.style";
import Card from "./card";
import { useInitialChart } from "./useInitialChart";

interface IProp {
  dataSource: { [key: string]: any };
}
interface ITooltip {
  [key: string]: any;
}
const EngagementRate: React.FC<IProp> = (prop) => {
  const { dataSource } = prop;
  const classes = useStyles();
  const edges = dataSource && dataSource.edges;

  const [data, setData] = useState({});
  interface IState {
    top?: number;
    left?: number;
    data?: any;
    showTooltip: boolean;
    node?: number;
    tooltip: any;
  }
  const [state, setState] = React.useState<IState>({
    top: 0,
    left: 0,
    data: "",
    showTooltip: false,
    node: 0,
    tooltip: undefined,
  });

  const onShowTooltip = useCallback((tooltip: ITooltip) => {
    if (tooltip.opacity === 0) {
      setState({
        showTooltip: false,
        tooltip: undefined,
      });
    } else {
      setState({
        ...state,
        top: tooltip.caretY - 600,
        left: tooltip.caretX + 30,
        data: "payload.date",
        showTooltip: true,
        node: tooltip.dataPoints[0].index,
      });
    }
  }, []);

  const options = {
    tooltips: {
      enabled: false,
      custom: onShowTooltip,
    },
    mode: "index",
  };

  useInitialChart(edges, setData);

  if (!edges) {
    return <></>;
  }

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.engagementWrapper}
    >
      <h2 className={classes.headTitle}>EngagementRate</h2>
      <Grid container direction="column" item xs={6}>
        <Line data={data} options={options} />
        <div style={{ position: "relative" }}>
          {state.showTooltip ? (
            <div
              style={{
                position: "absolute",
                color: "white",
                backgroundColor: "rebeccapurple",
                top: state.top,
                left: state.left,
              }}
            >
              <Card
                url={edges[state.node as number].node.display_url}
                like={edges[state.node as number].node.edge_liked_by.count}
                comment={
                  edges[state.node as number].node.edge_media_to_comment.count
                }
              />
            </div>
          ) : null}
        </div>
      </Grid>
    </Grid>
  );
};

export default React.memo(EngagementRate);
