import sprite from "../../images/symbol-defs.svg";

export const Icon = ({
  name,
  width = 24,
  height = 24,
  fill = "inherit",
  stroke = "inherit",
  onClick,
}) => {
  return (
    <svg width={width} height={height}>
      <use
        xlinkHref={`${sprite}#${name}`}
        fill={fill}
        stroke={stroke}
        onClick={onClick}
      />
    </svg>
  );
};
