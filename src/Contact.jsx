import Map from "./Components/Map/Map";
import { useJsApiLoader } from "@react-google-maps/api";
const API_KEY = process.env.REACT_APP_API_KEY;

const libraries = ["places"];

const defaultCenter = {
  lat: -3.745,
  lng: -38.523,
};

const Contact = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });

  return (
    <div className="map">
      {" "}
      {isLoaded ? <Map center={defaultCenter} /> : <h1 color="red">Error</h1>}
    </div>
  );
};

export default Contact;
