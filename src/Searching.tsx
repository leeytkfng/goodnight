import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Searching.css";

function Searching() {
  const [userName, setUserName] = useState(""); // 사용자 이름 상태
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 폼 제출 기본 동작 방지
    if (userName.trim()) {
      // 입력 값이 존재할 때만 탐색
      navigate(`/results/${userName}`); // 템플릿 리터럴 수정
    } else {
      alert("소환사명이 기재 되지 않았습니다!!!!");
    }
  };

  return (
    <div className="home">
      <h1>전적 검색</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="소환사명을 입력하세요"
          value={userName}
          className="infoname"
          onChange={(e) => setUserName(e.target.value)} // 상태 업데이트
        />
        <button type="submit" className="infoButton">
          검색
        </button>
      </form>
    </div>
  );
}

export default Searching;
