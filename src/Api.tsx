import axiosInstance from "./AxiosInstance";

export const getUserData = async (summonerName: string) => {
  const response = await axiosInstance.get(`/lol/summoner/v4/summoners/by-name/${summonerName}`);
  return response.data;
};

export const getMatchHistory = async (puuid: string) => {
  const response = await axiosInstance.get(`/lol/match/v5/matches/by-puuid/${puuid}/ids`);
  return response.data;
};
