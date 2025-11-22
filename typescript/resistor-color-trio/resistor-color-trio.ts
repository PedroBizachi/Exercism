export function decodedResistorValue(query: string[]) {
  return Number(
    `${COLORS.indexOf(query[0])}` +
      `${Math.pow(COLORS.indexOf(query[1]), COLORS.indexOf(query[2]))}`,
  );
}

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
