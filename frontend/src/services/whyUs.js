import axios from "axios";
const baseUrl = "http://localhost:3000/api/whyUs";

const getWhyUs = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

export default { getWhyUs };