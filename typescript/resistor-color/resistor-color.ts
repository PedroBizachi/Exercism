export const colorCode = (query: string): number | string[] => {
  return query == "Colors" ? COLORS : COLORS.indexOf(query);
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
