import React, { useState } from "react";
import List from "./List";
import Input from "./Input";
import data from "../data.json";

const App = () => {
  const [term, setTerm] = useState("");
  return (
    <div className="container">
      <React.Fragment>
        <Input onTermChange={setTerm} />
        <List data={data} term={term} />
      </React.Fragment>
    </div>
  );
};

export default App;
