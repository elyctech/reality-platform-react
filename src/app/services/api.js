import Api from "../../lib/services/Api";

export default new Api(
  `${window.location.protocol}//${window.location.hostname}`,
  3000
);
