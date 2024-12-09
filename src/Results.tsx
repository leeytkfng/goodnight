import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserData, getMatchHistory } from "./Api";

interface UserData {
  id: string;
  name: string;
  profileIconId: number;
  summonerLevel: number;
  puuid: string;
}

const Results: React.FC = () => {
  const { userName } = useParams<{ userName: string }>();
  const [summonerData, setSummonerData] = useState<UserData | null>(null);
  const [matchHistory, setMatchHistory] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!userName) return;

        const summonerInfo = await getUserData(userName);
        setSummonerData(summonerInfo);

        const matches = await getMatchHistory(summonerInfo.puuid);
        setMatchHistory(matches);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchData();
  }, [userName]);

  if (error) {
    return <div>에러: {error}</div>;
  }
  if (!summonerData) {
    return <div>불러오는 중...</div>;
  }
  return (
    <div className="searchResults">
      <h1>{summonerData.name}의 전적</h1>
      <p>레벨: {summonerData.summonerLevel}</p>
      <h2>최근 경기</h2>
      <ul>
        {matchHistory.map((match, index) => (
          <li key={index}>{match}</li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
