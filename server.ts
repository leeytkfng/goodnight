const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3001;

const RiotApiKey = process.env.VITE_RIOT_API_KEY;

app.use(cors());

app.get("/api/:endpoint*", async (req, res) => {
  const endpoint = req.params.endpoint;
  const queryParams = req.originalUrl.split("?")[1] || "";

  const riotApiUrl = `https://kr.api.riotgames.com/lol/${endpoint}?${queryParams}`;

  try {
    const response = await axios.get(riotApiUrl, {
      headers: {
        "X-Riot-Token": RiotApiKey,
      },
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("API 요청 실패:", error.message);
    res.status(error.response?.status || 500).json({
      error: error.response?.data || "서버에서 문제가 발생하였습니다",
    });
  }
});

app.listen(PORT, () => {
  console.log(`프록시 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
