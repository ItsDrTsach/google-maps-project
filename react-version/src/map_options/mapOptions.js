import ACIV from "./ACIV";

export const libraries = ["places"];

export const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

export const center = {
  lat: 32.0853,
  lng: 34.7818,
};

export const options = {
  styles: ACIV,
  disableDefaultUI: true,
  zoomControl: true,
};
