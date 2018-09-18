const PLACE = "place";
const MAP = "map";
const API_ROOT =
  process.env && process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/sites"
    : "https://kleiderspenden-api.herokuapp.com/api/sites";
export { PLACE, MAP, API_ROOT };
