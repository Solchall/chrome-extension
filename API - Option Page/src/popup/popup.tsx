import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Box,
  Grid,
  InputBase,
  IconButton,
  Paper,
  Icon,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import "fontsource-roboto";
import "./popup.css";
import { WeatherCard } from "./WeatherCard";
import {
  setStoredCities,
  getStoredCities,
  setStoredOptions,
  getStoredOptions,
  LocalStorageOptions,
} from "../utils/storage";

const App: React.FC<{}> = () => {
  const [cities, setCities] = useState<string[]>([]);
  const [cityInput, setCityInput] = useState<string>("");
  const [options, setOptions] = useState<LocalStorageOptions | null>(null);

  const handleCityButtonClick = () => {
    if (cityInput === "") {
      return;
    }
    const updatedCities = [...cities, cityInput];
    setStoredCities(updatedCities).then(() => {
      // chrome storage에 set이 정상적으로 끝난 이후
      setCities([...cities, cityInput]);
      setCityInput("");
    });
  };

  const handleCityDeleteButtonClick = (index: number) => {
    cities.splice(index, 1); // 클릭한 idx (city)에 해당하는 리스트 내 아이템 삭제

    const updatedCities = [...cities];
    setStoredCities(updatedCities).then(() => {
      setCities([...updatedCities]);
    });
  };

  const handleTempScaleButtonClick = () => {
    const updateOptions: LocalStorageOptions = {
      ...options,
      tempScale: options.tempScale === "metric" ? "imperial" : "metric",
    };
    setStoredOptions(updateOptions).then(() => {
      setOptions(updateOptions);
    });
  };

  useEffect(() => {
    getStoredCities().then((cities) => setCities(cities));
    getStoredOptions().then((options) => setOptions(options));
  }, []);

  if (!options) {
    return null;
  }
  return (
    <Box mx="8px" my="16px">
      {/*<img src="icon.png" />*/}
      <Grid container justifyContent="space-evenly">
        <Grid item>
          <Paper>
            <Box px="15px" py="5px">
              <InputBase
                placeholder="Add a city name"
                value={cityInput}
                onChange={(event) => setCityInput(event.target.value)}
              />
              <IconButton onClick={handleCityButtonClick}>
                <AddIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Box py="4px">
              <IconButton onClick={handleTempScaleButtonClick}>
                {options.tempScale === "metric" ? "\u2103" : "\u2109"}
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {options.homeCity != "" && (
        <WeatherCard city={options.homeCity} tempScale={options.tempScale} />
      )}
      {cities.map((city, idx) => (
        <WeatherCard
          city={city}
          key={idx}
          onDelete={() => handleCityDeleteButtonClick(idx)}
          tempScale={options.tempScale}
        />
      ))}
      <Box height="16px" />
    </Box>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
