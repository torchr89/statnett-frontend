export type EarthquakeFeature = {
  type: string;
  properties: string;
}

export type EarthquakeData = {
  features: EarthquakeFeature[];
  title: string;
  nrFeatures: number;
}

export type MeteorologicalItem = {
  title: string;
  description: string;
}

export type MeteorologicalData = {
  description: string;
  items: MeteorologicalItem[];
  nrItems: number;
}
