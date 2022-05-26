const pairs = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "23",
  "24",
  "25",
  "26",
  "27",
  "34",
  "35",
  "36",
  "37",
  "45",
  "46",
  "47",
  "56",
  "57",
  "67",
] as const;

export type Pair = typeof pairs[number];

export type Combination = [Pair, Pair, Pair, Pair];

export const tiles: Combination[][] = [
  [["01", "23", "45", "67"]],
  [
    ["01", "23", "46", "57"],
    ["01", "24", "35", "67"],
    ["02", "13", "45", "67"],
    ["06", "17", "23", "45"],
  ],
  [
    ["01", "23", "47", "56"],
    ["01", "25", "34", "67"],
    ["03", "12", "45", "67"],
    ["07", "16", "23", "45"],
  ],
  [
    ["01", "24", "36", "57"],
    ["02", "14", "35", "67"],
    ["05", "17", "23", "46"],
    ["06", "13", "27", "45"],
  ],
  [
    ["01", "24", "37", "56"],
    ["02", "15", "34", "67"],
    ["06", "12", "37", "45"],
    ["07", "15", "23", "46"],
  ],
  [
    ["01", "25", "36", "47"],
    ["03", "14", "25", "67"],
    ["03", "16", "27", "45"],
    ["05", "16", "23", "47"],
  ],
  [
    ["01", "25", "37", "46"],
    ["02", "16", "37", "45"],
    ["03", "15", "24", "67"],
    ["06", "15", "23", "47"],
  ],
  [
    ["01", "26", "34", "57"],
    ["04", "12", "35", "67"],
    ["04", "17", "23", "56"],
    ["07", "13", "26", "45"],
  ],
  [
    ["01", "26", "35", "47"],
    ["03", "17", "26", "45"],
    ["04", "13", "25", "67"],
    ["04", "16", "23", "57"],
  ],
  [
    ["01", "26", "37", "45"],
    ["04", "15", "23", "67"],
  ],
  [
    ["01", "27", "34", "56"],
    ["05", "12", "34", "67"],
    ["07", "12", "36", "45"],
    ["07", "14", "23", "56"],
  ],
  [
    ["01", "27", "35", "46"],
    ["02", "17", "36", "45"],
    ["05", "13", "24", "67"],
    ["06", "14", "23", "57"],
  ],
  [
    ["01", "27", "36", "45"],
    ["05", "14", "23", "67"],
  ],
  [
    ["02", "13", "46", "57"],
    ["06", "17", "24", "35"],
  ],
  [
    ["02", "13", "47", "56"],
    ["03", "12", "46", "57"],
    ["06", "17", "25", "34"],
    ["07", "16", "24", "35"],
  ],
  [
    ["02", "14", "36", "57"],
    ["05", "13", "27", "46"],
    ["05", "17", "24", "36"],
    ["06", "14", "27", "35"],
  ],
  [
    ["02", "14", "37", "56"],
    ["05", "12", "37", "46"],
    ["06", "15", "27", "34"],
    ["07", "15", "24", "36"],
  ],
  [
    ["02", "15", "36", "47"],
    ["03", "15", "27", "46"],
    ["05", "16", "24", "37"],
    ["06", "14", "25", "37"],
  ],
  [
    ["02", "15", "37", "46"],
    ["06", "15", "24", "37"],
  ],
  [
    ["02", "16", "34", "57"],
    ["03", "17", "24", "56"],
    ["06", "12", "35", "47"],
    ["07", "13", "25", "46"],
  ],
  [
    ["02", "16", "35", "47"],
    ["03", "16", "24", "57"],
    ["03", "17", "25", "46"],
    ["06", "13", "25", "47"],
  ],
  [
    ["02", "17", "34", "56"],
    ["06", "12", "34", "57"],
    ["07", "12", "35", "46"],
    ["07", "13", "24", "56"],
  ],
  [
    ["02", "17", "35", "46"],
    ["06", "13", "24", "57"],
  ],
  [
    ["03", "12", "47", "56"],
    ["07", "16", "25", "34"],
  ],
  [
    ["03", "14", "26", "57"],
    ["04", "16", "27", "35"],
    ["04", "17", "25", "36"],
    ["05", "13", "26", "47"],
  ],
  [
    ["03", "14", "27", "56"],
    ["05", "12", "36", "47"],
    ["05", "16", "27", "34"],
    ["07", "14", "25", "36"],
  ],
  [
    ["03", "15", "26", "47"],
    ["04", "16", "25", "37"],
  ],
  [["03", "16", "25", "47"]],
  [
    ["04", "12", "36", "57"],
    ["04", "13", "27", "56"],
    ["05", "17", "26", "34"],
    ["07", "14", "26", "35"],
  ],
  [
    ["04", "12", "37", "56"],
    ["07", "15", "26", "34"],
  ],
  [
    ["04", "13", "26", "57"],
    ["04", "17", "26", "35"],
  ],
  [["04", "15", "26", "37"]],
  [
    ["04", "15", "27", "36"],
    ["05", "14", "26", "37"],
  ],
  [["05", "14", "27", "36"]],
  [["07", "12", "34", "56"]],
];

export const bg = "#a72";
export const color = "#fed";
export const edge = "#860";
