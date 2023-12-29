import axios from "axios";
const baseUrl = "http://localhost:3000/api/team";

const getTeam = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

export default { getTeam };