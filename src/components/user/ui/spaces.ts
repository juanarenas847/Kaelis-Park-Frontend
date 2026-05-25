// data/spaces.ts
export interface Space {
  id: string;
  status: string;
  type: string;
}


export const topSpaces = [
  { id: "B-01", status: "disponible", type: "moto" },
  { id: "B-02", status: "disponible", type: "moto" },
  { id: "B-03", status: "disponible", type: "moto" },
  { id: "B-04", status: "disponible", type: "moto" },
  { id: "B-05", status: "disponible", type: "moto" },

  { id: "B-06", status: "occupied", type: "moto" },

  { id: "B-07", status: "disponible", type: "moto" },
  { id: "B-08", status: "disponible", type: "moto" },
  { id: "B-09", status: "disponible", type: "moto" },
  { id: "B-10", status: "disponible", type: "moto" },
  { id: "B-11", status: "disponible", type: "moto" },
  { id: "B-12", status: "disponible", type: "moto" },
  { id: "B-13", status: "disponible", type: "moto" },

  { id: "B-14", status: "occupied", type: "moto" },

  { id: "B-15", status: "disponible", type: "moto" },
  { id: "B-16", status: "disponible", type: "moto" },
  { id: "B-17", status: "disponible", type: "moto" },
  { id: "B-18", status: "disponible", type: "moto" },


];

export const leftSpaces = [
  { id: "L-01", status: "disponible", type: "moto" },
  { id: "L-02", status: "disponible", type: "moto" },
  { id: "L-03", status: "disponible", type: "moto" },
  { id: "L-04", status: "disponible", type: "moto" },
  { id: "L-05", status: "disponible", type: "moto" },
  { id: "L-06", status: "disponible", type: "moto" },

  { id: "L-07", status: "disponible", type: "moto" },
  { id: "L-08", status: "disponible", type: "moto" },
  { id: "L-09", status: "disponible", type: "moto" },

  { id: "L-10", status: "reserved", type: "moto" },

  { id: "L-11", status: "disponible", type: "moto" },
  { id: "L-12", status: "disponible", type: "moto" },
];

export const rightSpaces = [
  { id: "R-01", status: "disponible", type: "moto" },
  { id: "R-02", status: "disponible", type: "moto" },
  { id: "R-03", status: "disponible", type: "moto" },
  { id: "R-04", status: "disponible", type: "moto" },
  { id: "R-05", status: "disponible", type: "moto" },
  { id: "R-06", status: "disponible", type: "moto" },

  { id: "R-07", status: "disponible", type: "moto" },
  { id: "R-08", status: "disponible", type: "moto" },
  { id: "R-09", status: "disponible", type: "moto" },

  { id: "R-10", status: "reserved", type: "moto" },

  { id: "R-11", status: "disponible", type: "moto" },
  { id: "R-12", status: "disponible", type: "moto" },
];
