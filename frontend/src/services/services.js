import axios from "axios";
const baseUrl = "http://localhost:3000/api/services";

const getServices = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

export default { getServices };