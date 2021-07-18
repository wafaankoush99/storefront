import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

function Product_Details() {
  const state = useSelector((state) => {
    return {
      Products: state.Category.details,
    };
  });

  const styling = makeStyles({
    root: {
      maxWidth: 350,
      display: "inline-block",
      margin: 50,
    },
    media: {
      height: 300,
      width: 300,
      margin: "auto",
    },
  });
  const classes = styling();
  return (
    <>
      <Card className="details">
        <Typography gutterBottom variant="h5" component="h2">
          {state.Products[0].name}
        </Typography>
        <CardMedia className={classes.media} image={state.Products[0].image} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Price :{state.Products[0].price}$
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            In Stock: {state.Products[0].inventory}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            Description: {state.Products[0].description}
          </Typography>
        </CardContent>
        <Button className="btnBuy">Buy Now :)</Button>
      </Card>
      <div className="feedBack">
        <p>Send a feedback :) </p>
        <input />
        <Button className="btnBuy"> Send </Button>
      </div>
    </>
  );
}

export default Product_Details;
