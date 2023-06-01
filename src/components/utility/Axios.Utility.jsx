import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:4000" });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = "Bearer token";
  const OnSuccess = (response) => response;
  const onError = (error) => {
    // optional catch errors and add additional logging here

    return error;
  };

  return client(options).then(OnSuccess).catch(onError);
};
