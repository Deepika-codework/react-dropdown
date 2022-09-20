import React from "react";
import CustomSelect from "./custom-select-menu/custom-select";

import { stateOptions } from "./custom-select-menu/data"

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
      <div className="">
        <h3>Multi Select Drop Down</h3>
        <CustomSelect option={[...stateOptions]} id='value' label='label'/>   
      </div>
      </React.StrictMode>
    );
  }
}

export default App;
