import React, { useState, useEffect } from "react";
import Card from "./card";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./style";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
interface IProp {
  dataSource: { [key: string]: any };
}
const LastPosts: React.FC<IProp> = (props) => {
  const { dataSource } = props;
  const CARDS_LENGTH = 3;
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(1);
  const edges = dataSource && dataSource.edges;
  const [currentCards, setCurrentCards] = useState(edges?.slice(0, 3));
  useEffect(() => {
    setCurrentCards(edges?.slice(0, 3));
  }, [edges]);
  if (!dataSource) {
    return <></>;
  }

  const handleBack = () => {
    console.log(activeStep);
    setCurrentCards(
      edges?.slice(
        CARDS_LENGTH * (activeStep - 2),
        (activeStep - 1) * CARDS_LENGTH
      )
    );
    setActiveStep(activeStep - 1);
  };
  const handleNext = () => {
    setCurrentCards(
      edges?.slice(CARDS_LENGTH * activeStep, (activeStep + 1) * CARDS_LENGTH)
    );
    setActiveStep(activeStep + 1);
  };
  if (!edges || edges?.length === 0) {
    return <></>;
  }
  console.log(edges);
  return (
    <Grid
      container
      direction="row"
      justify="center"
      className={classes.lastPostWrapper}
    >
      <Button size="large" onClick={handleBack} disabled={activeStep === 1}>
        <KeyboardArrowLeft style={{ fontSize: 150 }} />
      </Button>
      {currentCards?.map((item: any, index: number) => (
        <Card
          key={index}
          url={item.node.display_url}
          like={item.node.edge_liked_by.count}
          comment={item.node.edge_media_to_comment.count}
        />
      ))}
      <Button
        size="large"
        onClick={handleNext}
        disabled={edges.length === activeStep * CARDS_LENGTH}
      >
        <KeyboardArrowRight style={{ fontSize: 150 }} />
      </Button>
    </Grid>
  );
};
export default LastPosts;
