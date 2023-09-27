import { Dispatch, SetStateAction } from "react";

interface Props {
  maxRows: number;
  rows: number;
  setRows: Dispatch<SetStateAction<number>>;
  
}

export const RowSlider = ({maxRows, rows, setRows}: Props) => {
  return(
    <div>
      <p>Rows to display: {rows}</p>
      <input
        type="range"
        min="0"
        max={maxRows}
        value={rows}
        onChange={(e) => setRows(parseInt(e.target.value))}
      />
    </div>
  )
}