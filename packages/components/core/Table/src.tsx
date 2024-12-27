import React from "react";

interface Column {
  head: string;
  element?: React.ReactNode;
  width?: string;
}

interface StyleProp {
  position: number;
  style: string;
}

type TableProp = {
  data: Record<string, React.ReactNode>[];
  columns: (string | Column)[];
  stickyColumns?: string[];
  styleRows?: StyleProp[];
};

export const Table: React.FC<TableProp> = ({
  data,
  columns,
  stickyColumns,
  styleRows,
}: TableProp) => {
  const headers = columns.length
    ? columns.map((col) => (typeof col === "string" ? col : col.head))
    : data && data.length
      ? Object.keys(data[0])
      : [];

  if (columns.length) {
  }

  const rows = data.map((row) => {
    return headers.map((col) => {
      return row[col];
    });
  });

  return (
    <table className="w-full">
      <thead>
        <tr className="sticky top-0 uppercase">
          {headers.map((column, index) => (
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
            {headers.map((column, index) => (
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
