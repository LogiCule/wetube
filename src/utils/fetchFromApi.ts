import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
// eslint-disable-next-line
const options: AxiosRequestConfig<any> = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    // eslint-disable-next-line
  } as any,
};

export const fetchFromAPI = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
