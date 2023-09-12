export interface Pokemon {
  id: any;
  name: any;
  height: any;
  types: any[];
  weight: any;
  abilities: any[];
  sprites: {
    back_default: any[];
    back_female: any[];
    back_shiny: any[];
    back_shiny_female: any[];
    front_default: any[];
    front_female: any[];
    front_shiny: any[];
    front_shiny_female: any[];
    other: {
      home: any[];
      "official-artwork": {
        front_default: any[];
        front_shiny: any[];
      };
    };
    versions: any[];
  };
}
