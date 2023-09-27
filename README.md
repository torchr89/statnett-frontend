# statnett-frontend
Frontend for display weather/earthquake-data provided by statnett-backend.
Some randomly chosen features extracted from:
https://api.met.no/weatherapi/metalerts/1.1?show=all
and
https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson
are presented in two tables mapped to the react components:
`MeteorologicalTable(.tsx)`
and
`EarthquakeTable(.tsx)`
respectively. Above each table is a slider to adjust maximum number of rows displayed for a table.

### Running the application
Type the following commands in a command-prompt/shell in the root of this project:
- `npm install`
- `npm run dev`
and then open your browser and type `http://localhost:8081/` in the address-bar
