export default {
  namespaced: true,
  state: {
    list: [
      {
        name: "삼성전자",
        title: "삼성전자 떡상각",
        writer: "김삼성",
        tag: ["전기전자", "시스템반도체", "반도체 대표주(생산)"],
        likes: false,
      },
      {
        name: "엘지디스플레이",
        title: "엘지디스플레이 떡상각",
        writer: "나엘지",
        tag: ["스마트폰", "제조업", "전기전자"],
        likes: false,
      },
      {
        name: "이마트",
        title: "이마트 떡상각",
        writer: "박이마트",
        tag: ["소매유통", "유통업"],
        likes: false,
      },
      {
        name: "SK 하이닉스",
        title: "SK 하이닉스 떡상각",
        writer: "문하닉",
        tag: ["시스템반도체", "반도체 대표주(생산)", "자율주행차"],
        likes: false,
      },
      {
        name: "삼성전자",
        title: "삼성전자 떡상각",
        writer: "김삼성",
        tag: ["전기전자", "시스템반도체", "반도체 대표주(생산)"],
        likes: false,
      },

      {
        name: "삼성전자",
        title: "삼성전자 떡상각",
        writer: "김삼성",
        tag: ["전기전자", "시스템반도체", "반도체 대표주(생산)"],
        likes: false,
      },

      {
        name: "삼성전자",
        title: "삼성전자 떡상각",
        writer: "김삼성",
        tag: ["전기전자", "시스템반도체", "반도체 대표주(생산)"],
        likes: false,
      },
      {
        name: "엘지디스플레이",
        title: "엘지디스플레이 떡상각",
        writer: "나엘지",
        tag: ["스마트폰", "제조업", "전기전자"],
        likes: false,
      },
      {
        name: "이마트",
        title: "이마트 떡상각",
        writer: "박이마트",
        tag: ["소매유통", "유통업"],
        likes: false,
      },
      {
        name: "SK 하이닉스",
        title: "SK 하이닉스 떡상각",
        writer: "문하닉",
        tag: ["시스템반도체", "반도체 대표주(생산)", "자율주행차"],
        likes: false,
      },
      {
        name: "카카오",
        title: "카카오 떡상각",
        writer: "정카카",
        tag: ["엔터테인먼트", "IT", "인터넷 대표주"],
        likes: false,
      },
      {
        name: "네이버",
        title: "네이버 떡상각",
        writer: "문네이",
        tag: ["엔터테인먼트", "IT", "인터넷 대표주"],
        likes: false,
      },
    ],
    writing: [
      {
        주식종목: "삼성전자",
        제목: "삼성전자 10만원간다",
        작성자: "정희상",
        날짜: "10월 24일",
      },
      {
        주식종목: "이마트",
        제목: "이마트 30만원간다",
        작성자: "김성수",
        날짜: "10월 24일",
      },
      {
        주식종목: "자유",
        제목: "다모르겠고 내가 승리자다",
        작성자: "신순호",
        날짜: "10월 24일",
      },
      {
        주식종목: "자유",
        제목: "아 주식창보니 -50찍혔네",
        작성자: "문준호",
        날짜: "10월 24일",
      },
    ],
  },
  mutations: {
    LikeOn(state, data) {
      state.list[data].likes = true;
    },
    LikeOff(state, data) {
      state.list[data].likes = false;
    },
  },
};
