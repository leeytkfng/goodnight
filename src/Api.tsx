import axiosInstance from "./AxiosInstance";

export const getUserData = async (summonerName: string) => {
  try {
    const response = await axiosInstance.get(`/summoner/v4/summoners/by-name/${summonerName}`);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.error("API 요청 실패:", error.response?.data || error.message);
    throw error;
  }
};

export const getMatchHistory = async (puuid: string) => {
  try {
    const response = await axiosInstance.get(`/match/v5/matches/by-puuid/${puuid}/ids`);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.error("API 요청 실패:", error.response?.data || error.message);
    throw error;
  }
};
