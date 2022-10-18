import "./App.css";
import Signup from "./components/Signup";
import store from "./components/redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Signup />
    </Provider>
  );
}

export default App;
