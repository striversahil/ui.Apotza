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
    <table className="w-full">
      <thead>
        <tr className="sticky top-0 uppercase">
          {columns.map((column, index) => (
            <th
              key={index}
              className="box-content border-[2px] p-2 border-blue-300  "
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="overflow-y-scroll">
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column, index) => (
              <td
                key={index}
                className="border-[2px] p-2 border-blue-300 bg-gradient-to-tr to-transparent"
              >
                {row[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
