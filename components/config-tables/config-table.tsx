export const ConfigTable = ({
  columns,
  data,
}: {
  columns: { key: string; title: string }[];
  data: { [key: string]: string }[];
}) => {
  return (
    <table className="border-separate border-spacing-2">
      <thead>
        <tr>
          {columns.map((column) => (
            <th className="" key={column.key}>
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td className="align-top" key={column.key}>
                {column.key === "accepted_values" && row.av_as_code ? (
                  row[column.key].split(",").map((value, index) => (
                    <code
                      key={index}
                      className="text-xs mx-1 nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] dark:nx-border-white/10 dark:nx-bg-white/10"
                    >
                      {value.trim()}
                    </code>
                  ))
                ) : column.key === "property" ? (
                  <code className="text-sm nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] dark:nx-border-white/10 dark:nx-bg-white/10">
                    {row[column.key]}
                  </code>
                ) : (
                  <div className="px-5 text-sm">{row[column.key]}</div>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ConfigTable.displayName = "ConfigTable";
