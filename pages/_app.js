import "../styles/globals.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunkMiddleware from "redux-thunk";
function MyApp({ Component, pageProps }) {
  const bindMiddleware = (middleware) => {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  };
  const store = createStore(
    rootReducer,
    undefined,
    bindMiddleware([thunkMiddleware])
  );

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
