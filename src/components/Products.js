import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, CardActions, Typography, Button } from "@material-ui/core";
import { updateRemoteData } from "../store/action";


const styling = makeStyles({
  root: {
    maxWidth: 350,
    display: "inline-block",
    margin: 50,
  },
  media: {
    height: 245,
  },
});


const stateMapProps = (state) => ({
  Pro: state.ProductReducer.productsList,
  categories: state.CatReducer.categories,
});

const dispatchToProps = { updateRemoteData };


function Products(props) {
  const classes = styling();

  return (
    <>
      <div className="cards" >



        {props.Pro.map((it, i) => {
          if (it.inventory == 0) {
            return;
          }

          return (
            <>
              <Card key={i} className={classes.root} id="cards" >
                <CardMedia className={classes.media} image={it.image} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {it.item}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">

                    {it.description}

                    <br></br>

                    <h3>
                      Price: {it.price} $
                    </h3>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    <h3>
                      Quantity Available: {it.inventory}
                    </h3>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => props.updateRemoteData(it)}
                  >
                    Add to Cart
                  </Button>
                  <Button size="small" color="primary">
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
}



export default connect(stateMapProps, dispatchToProps)(Products);
