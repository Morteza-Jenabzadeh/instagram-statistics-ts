import React from "react";
import Card from "./card";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./style";

interface IProp {
  dataSource: { [key: string]: any };
}
const LastPosts: React.FC<IProp> = (props) => {
  const { dataSource } = props;
  const classes = useStyles();

  if (!dataSource) {
    return <></>;
  }
  const edges = dataSource && dataSource.edges;
  if (!edges || edges?.length === 0) {
    return <></>;
  }
  return (
    <Grid
      container
      direction="row"
      justify="center"
      className={classes.lastPostWrapper}
    >
      {edges?.slice(0, 3).map((item: any, index: number) => (
        <Card
          key={index}
          url={item.node.display_url}
          like={item.node.edge_liked_by.count}
          comment={item.node.edge_media_to_comment.count}
        />
      ))}
    </Grid>
  );
};
export default LastPosts;
