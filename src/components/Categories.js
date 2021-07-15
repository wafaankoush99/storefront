import React from "react";
import { connect } from "react-redux";
import { activeCatFun } from "../store/CategoryStore";
import { getRemoteData } from "../store/action";
import { useEffect } from "react";

import Paper from "@material-ui/core/Paper";
// import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";

// import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
// import { Typography } from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    margin: "auto",
  },
});



const stateMapProps = (state) => ({
  categories: state.CatReducer.categories,
});

const dispatchToProps = { activeCatFun, getRemoteData };


const Categories = (props) => {
  useEffect(() => {
    props.getRemoteData();
  }, []);
  
  const classes = useStyles();


  // console.log(props)
  return (

    <>
      <h3>Browse our Categories</h3>

      <Paper className={classes.root}>
        <Tabs centered>
          {props.categories.map((cat, i) => {
            return (
              <>
                <Tab
                  label={cat.displayName}
                  key={i}
                  onClick={() => {
                    props.activeCatFun(cat)
                  }
                  }
                ></Tab>
              </>
            );
          })}
        </Tabs>

      </Paper>
    </>



  );
};



export default connect(stateMapProps, dispatchToProps)(Categories);
