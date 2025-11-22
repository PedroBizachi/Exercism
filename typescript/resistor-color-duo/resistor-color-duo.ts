export function decodedValue(query: string[]): number {
  return Number(COLORS.indexOf(query[0]) + COLORS.indexOf(query[0]));
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
