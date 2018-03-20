import ApiService from "../../lib/services/ApiService";

export default new ApiService(
  `${window.location.protocol}//${window.location.hostname}`,
  3000
);
