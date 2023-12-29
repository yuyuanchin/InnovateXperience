import axios from "axios";
const baseUrl = "/api/services";

const getServices = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

export default { getServices };