import { useEffect, useState } from "react";
import { EarthquakeData, EarthquakeFeature } from "../types/types";
import { RowSlider } from "./RowSlider";

interface Props {
  name: string;
  data: EarthquakeData | null;
};

export const EarthquakeTable = ({name, data}: Props ) => {
  const [rowsToDisplay, setRowsToDisplay] = useState(10);

  useEffect(() => {
    if (data) {
      setRowsToDisplay(data.nrFeatures)
    }
  }, [data])
  return (
    <>
      { data &&
      <div>
        <h2>{name}</h2>
        <p>Test</p>
        <div>
          <RowSlider 
            maxRows={data.nrFeatures}
            rows={rowsToDisplay}
            setRows={setRowsToDisplay}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Entry nr</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            { data.features
              .slice(0, rowsToDisplay)
              .map((feature: EarthquakeFeature, index: number) =>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{feature.type}</td>
                <td>{feature.properties}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      }
    </>
  );
};
