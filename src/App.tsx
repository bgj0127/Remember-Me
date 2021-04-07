import * as React from "react";
import { GlobalStyles } from './globalStyle';
import Main from './components/main/Main';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Main />
    </React.Fragment>
  );
};

export default App;
