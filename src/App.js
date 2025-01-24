import logo from "./logo.svg";
import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherSearch />
        <p>
          {" "}
          This project was coded by{" "}
          <a href="https://github.com/Aracely0504">Aracely Campos </a> and is{" "}
          <a href="https://github.com/Aracely0504/react-weather-app">
            open-sourced on Github
          </a>{" "}
          and
          <a href="http://www.example.com"> hosted on Netlify.</a>
        </p>
      </header>
    </div>
  );
}

export default App;
