import App from "./app";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";

function All() {
  return (
    <>
      <Provider store={store}>

        <App />

      </Provider>
      <h1> Welcome To Our Store :) </h1>
    </>
  );
}

ReactDOM.render(<All />, document.getElementById("myRoot"));
