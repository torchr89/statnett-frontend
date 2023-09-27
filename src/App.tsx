import { useState, useEffect } from 'react'
import { EarthquakeTable } from './components/EarthquakeTable'
import { MeteorologicalTable } from './components/MeteorologicalTable'
import { fetchMetData, fetchEarthquakeData } from './util/fetchData';
import { MeteorologicalData, EarthquakeData } from './types/types';
import "./App.css"

function App() {
  const [metData, setMetData] = useState<MeteorologicalData | null>(null);
  const [earthquakeData, setEarthquakeData] = useState<EarthquakeData | null>(null);

  useEffect(() => {
    fetchMetData(setMetData);
    fetchEarthquakeData(setEarthquakeData);
  }, []);

  return (
    <>
      <h1>Data viewer</h1>
        <div>
          { metData &&
          <MeteorologicalTable
            name={"Meteorological data"}
            data={metData}
          />
          }
          { earthquakeData &&
          <EarthquakeTable
            name={"Earthquake data"}
            data={earthquakeData}
          />
          }
        </div>
    </>
  )
}

export default App
