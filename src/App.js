// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Movie App</h1>
        </header>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <MovieList movies={movies} />}
            />
            <Route
              path="/movies/:id"
              render={() => <MovieDetails movies={movies} />}
            />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
