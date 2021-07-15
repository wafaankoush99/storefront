import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, CardActions, Typography, Button } from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";
// import { addToMyCart } from "../store/ProductsStore";

import { updateRemoteData } from "../store/action";




const stateMapProps = (state) => ({

  Prod: state.ProductReducer.listOfProducts,
  categories: state.CatReducer.categories,
});

const dispatchToProps = { updateRemoteData };

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

function items(props) {
  // console.log(props);
  let calss = styling();



  return (
    <>

      {/* {props.Prod}  */}
      {/* <h1>Flowers</h1> */}
      <div className="cards">
        {props.Prod.map((it, i) => {
          if (it.quantity === 0) {
            return;
          }

          return (
            <>


              <Card className={calss.root} key={i} id="cards">
                <CardMedia
                  className={calss.media}
                  image={it.image} />
                <CardContent>

                  <Typography gutterBottom variant="h4" >
                    {it.name}
                  </Typography>

                  <Typography variant="" color="textSecondary" component="p">
                    {it.price}$
                  </Typography>

                </CardContent>

                <CardActions>

                  <Button size="small" color="primary"
                  onClick={() => props.updateRemoteData(it)}>
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

export default connect(stateMapProps, dispatchToProps)(items);
