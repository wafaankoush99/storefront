import React from "react";
import { connect } from "react-redux";
import { activeCatFun } from "../store/CategoryStore";

import Paper from "@material-ui/core/Paper";
// import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";


const mapStateToProps = (state) => ({
  categories: state.CatReducer.categories,
});

const mapDispatchToProps = { activeCatFun };


const Categories = (props) => {

  // console.log(props)
  return (

    <>
      <h3>Browse our Categories</h3>

      <Paper >
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
      </Paper>
    </>



  );
};



export default connect(mapStateToProps, mapDispatchToProps)(Categories);
