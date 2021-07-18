import React from "react";
import { ACTIVE } from "../store/CategoryStore";
import { getRemoteData } from "../store/CategoryStore";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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

const Category = () => {
  useEffect(() => {
    dispatch(getRemoteData());
  }, []);

  const state = useSelector((state) => {
    return {
      categories: state.Category.categories,
    };
  });
  const dispatch = useDispatch();

  const classes = styling();

  return (
    <>
     <h3>Browse our Categories</h3>
      <Paper square className={classes.root}>
        <Tabs centered>
          {state.categories.map((it, i) => {
            return (
              <>
                <Tab
                  color="info"
                  label={it}
                  key={i}
                  onClick={() => dispatch(ACTIVE(it))}
                />
              </>
            );
          })}
        </Tabs>
      </Paper>
    </>
  );
};

export default Category;
