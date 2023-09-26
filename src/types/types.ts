export type EarthquakeFeature = {
  type: string;
  properties: string;
}

export type EarthquakeData = {
  features: EarthquakeFeature[];
}

export type MetItem = {
  title: string;
  description: string;
}

export type MetData = {
  description: string;
  items: MetItem[];
}