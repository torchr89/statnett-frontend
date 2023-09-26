import { useState, useEffect } from 'react'
import { Table } from './components/Table'
import { fetchMetData, fetchEarthquakeData } from './util/fetchData';
import { MetData, EarthquakeData } from './types/types';

function App() {
  const [metData, setMetData] = useState<MetData | null>(null);
  const [earthquakeData, setEarthquakeData] = useState<EarthquakeData | null>(null);

  useEffect(() => {
    fetchMetData(setMetData);
    fetchEarthquakeData(setEarthquakeData);
  }, []);

  return (
    <>
      <h1>Data viewer</h1>
      { earthquakeData &&
        <div>
          <Table
            name={"Meteorological data"}
            data={metData}
          />
          <Table
            name = {"Earthquake data"}
            data = {earthquakeData}
          />
        </div>
      }
    </>
  )
}

export default App
