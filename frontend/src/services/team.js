import axios from "axios";
const baseUrl = "/api/team";

const getTeam = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

export default { getTeam };