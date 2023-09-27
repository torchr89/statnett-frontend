import { useEffect, useState } from "react";
import { MeteorologicalData, MeteorologicalItem } from "../types/types";
import { RowSlider } from "./RowSlider";

interface Props {
  name: string;
  data: MeteorologicalData | null;
};

export const MeteorologicalTable = ({name, data}: Props ) => {
  const [rowsToDisplay, setRowsToDisplay] = useState<number>(20);

  useEffect(() => {
    if (data) {
      setRowsToDisplay(data.nrItems)
    }
  }, [data])

  return (
    <>
      { data &&
      <div>
        <h2>{name}</h2>
        <b>{data.description}</b>
        <div>
          <RowSlider 
            maxRows={data.nrItems}
            rows={rowsToDisplay}
            setRows={setRowsToDisplay}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Entry nr</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            { data.items
              .slice(0, rowsToDisplay)
              .map((item: MeteorologicalItem, index: number) =>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      }
    </>
  );
};
