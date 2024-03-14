const customChartLegend = (props) => {
  const { payload } = props;

  return (
    <ul className="flex justify-center gap-5 galaxy:hidden">
      {payload.map((entry, index) => (
        <div key={index} className="flex items-center gap-2">
          <span
            className={`${
              entry.type === "circle" ? "rounded-full" : "rounded-sm"
            } w-[10px] h-[10px]`}
            style={{ backgroundColor: entry.color }}
          ></span>
          <li>{entry.value}</li>
        </div>
      ))}
    </ul>
  );
};

export default customChartLegend;
