import React from "react";

interface StyleProp {
  position: number;
  style: string;
}

type TableProp = {
  data: Record<string, React.ReactNode>[];
  columns: string[];
  stickyColumns?: string[];
  styleRows?: StyleProp[];
};

export const Table: React.FC<TableProp> = ({
  data,
  columns,
  stickyColumns,
  styleRows,
}: TableProp) => {
  const header = columns.length ? columns : data[0] ? data[0] : [];

  const rows = data.map((row) => {
    return columns.map((col) => {
      return row[col];
    });
  });

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column, index) => (
              <td key={index}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
