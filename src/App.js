import { Fragment } from "react";

import { Provider } from "react-redux";
import store from "./store";

import CompanyList from "./components/company/CompanyList";
import Alert from "./components/Alert";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Alert />
        <CompanyList />
      </Fragment>
    </Provider>
  );
};

export default App;
