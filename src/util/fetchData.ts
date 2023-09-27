import { Dispatch, SetStateAction } from "react"
import { EarthquakeData, MeteorologicalData } from "../types/types";

const baseUrl = 'http://localhost:8080/api';
export const urlMetEndpoint = `${baseUrl}/met`;
export const urlEarthquakeEndpoint = `${baseUrl}/earthquake`;

type CallbackTypes = Dispatch<SetStateAction<MeteorologicalData | null>>
                   | Dispatch<SetStateAction<EarthquakeData | null>>

export const fetchDataFromUrl = (url: string, setCallback: CallbackTypes) => {
  fetch(url)
  .then(response => response.json())
  .then(json => setCallback(json))
  .catch(error => console.error(error));
}

export const fetchMetData = (setMetData: Dispatch<SetStateAction<MeteorologicalData | null>>) => {
  fetchDataFromUrl(urlMetEndpoint, setMetData);
}

export const fetchEarthquakeData = (setEarthquakeData: Dispatch<SetStateAction<EarthquakeData | null>>) => {
  fetchDataFromUrl(urlEarthquakeEndpoint, setEarthquakeData);
}
