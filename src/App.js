import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./views/Welcome";
import Types from "./views/Types";
import Results from "./views/Results";
import SearchContext from "./contexts/SearchContext";
import ResultsContext from "./contexts/ResultsContext";

function App() {
  const possibleSearches = {
    types: [
      "Education",
      "Recreational",
      "Social",
      "DIY",
      "Charity",
      "Cooking",
      "Relaxation",
      "Music",
      "Busywork",
    ],
    participants: ["1", "2", "3", "4", "5+"],
    price: [
      "Free",
      "Inexpensive",
      "Moderately Expensive",
      "Pretty Expensive",
      "Quite Expensive",
    ],
    accessibility: ["Trivial", "Easy", "Average", "Challenging", "Impossible"],
  };

  const [search, setSearch] = useState({
    type: null, // string
    participants: null, // int
    accessibility: null, // int
    price: null, // int
  });
  const [results, setResults] = useState({});

  return (
    <SearchContext.Provider value={{ search, setSearch, possibleSearches }}>
      <ResultsContext.Provider value={{ results, setResults }}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/types" component={Types} />
            <Route path="/results" component={Results} />
          </Switch>
        </div>
      </ResultsContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
