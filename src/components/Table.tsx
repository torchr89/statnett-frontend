/* eslint-disable @typescript-eslint/no-unused-vars */

import { EarthquakeData, MetData } from "../types/types";

interface Props {
  name: string,
  data: MetData | EarthquakeData | null
}

export const Table = ({name, data}: Props ) => {
  console.log(data)
  
  return (
    <div>
      <>
        <h2>{name}</h2>
        <table>
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>B</td>
              <td>C</td>
            </tr>
          </tbody>
        </table>
      </>
    </div>
  );
};
