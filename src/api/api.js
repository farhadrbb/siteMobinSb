import axios from "axios";

export const getAxiosInstance = () => {
  return axios.create({
    baseURL: getUrl(),
    // baseURL:'http://192.168.73.64:7001/GradDB/V1/',
    headers: {
      "Content-Type": "application/json",
    },
  });
};

function getUrl() {
  let protocol = window.location.protocol;
  let hostName = window.location.hostname;

  if (!protocol || !hostName || hostName === "localhost") {
    return "https://www.mobinsb.ir/GradDB/V1/";
  }

  return `${protocol}//${hostName}/GradDB/V1/`;
  // return `${protocol}//${hostName}:7001/GradDB/V1/`
}
