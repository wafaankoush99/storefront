import React from "react";
import { connect } from "react-redux";
import { activeCat } from "../store/CategoryStore";
import { getRemoteData } from "../store/action";
import { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const styling = makeStyles({
  root: {
    maxWidth: 700,
    margin: "auto",
  },
});

const Category = (props) => {
  useEffect(() => {
    props.getRemoteData();
  }, []);

  const classes = styling();

  return (
    <>

      <h3>Browse our Categories</h3>

      <Paper square className={classes.root}>
        <Tabs centered>
          {props.categories.map((act, i) => {
            return (
              <>
                <Tab
                  color="info"
                  label={act}
                  key={i}
                  onClick={() => props.activeCat(act)}
                />
              </>
            );
          })}
        </Tabs>
      </Paper>
    </>
  );
};

const stateMapProps = (state) => ({
  categories: state.CatReducer.categories,
});

const dispatchToProps = { activeCat, getRemoteData };

export default connect(stateMapProps, dispatchToProps)(Category);
