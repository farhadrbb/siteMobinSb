import axios from "axios";

export const apiC = () => {
  getUrl()
  let data = JSON.stringify({
    token: "3cf61fab-b50a-410f-9d59-3357ee4706fe",
    member_id: "_0zehXYBdxxYGfkX5_wd",
    api_key: "d025488f-8ec6-4434-afbe-b6a5343815a7",
    table: "shoab",
    method_type: "select",
    data: {},
  });

  let config = {
    method: "post",
    url: getUrl(),
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  return axios(config);
};


function getUrl() {

  let protocol = window.location.protocol
  let hostName = window.location.hostname

  if (!protocol || !hostName || hostName === 'localhost') {
    return 'https://www.mobinsb.ir/GradDB/V1/'
  }

  return `${protocol}//${hostName}/GradDB/V1/`
  // return `${protocol}//${hostName}:7001/GradDB/V1/`

}
