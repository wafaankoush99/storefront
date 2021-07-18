import React from "react";
import { Link } from "react-router-dom";
import { updateRemoteData } from "../store/CategoryStore";
import { details } from "../store/CategoryStore";
import { useSelector, useDispatch } from "react-redux";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styling = makeStyles({
  root: {
    maxWidth: 350,
    display: "inline-block",
    margin: 50,
  },
  media: {
    height: 240,
  },
});

function Products() {
  const classes = styling();

  const state = useSelector((state) => {
    return {
      Pro: state.Category.productsList,
      categories: state.Category.categories,
    };
  });

  const dispatch = useDispatch();

  return (
    <div className="mainCards">
      {" "}
      {state.Pro.map((it, i) => {
        if (it.inventory == 0) {
          return;
        }

        return (
          <>
            <div className="cards" >

              <Card key={i} className={classes.root}>
                <CardMedia className={classes.media} image={it.image} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {it.item}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {it.description} {it.price}$
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Quantity Available: {it.inventory}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => dispatch(updateRemoteData(it))}
                  >
                    Add to Cart
                  </Button>

                  <Link to="/products/details">
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => dispatch(details(it._id))}
                    >
                      View Details
                    </Button>
                  </Link>
                </CardActions>
              </Card>


            </div>

          </>
        );
      })}
    </div>
  );
}

export default Products;
