const quotes = [
  {
    quote: "발 없는 오픈소스 천 리 간다",
  },
  {
    quote: "가는 디자인 좋아야, 오는 디자인 좋다",
  },
  {
    quote: "버그 잡으려다 잡은 버그 놓친다",
  },
  {
    quote: "백문이 불여일타",
  },
  {
    quote: "한 줄 코드도 맞들면 낫다",
  },
  {
    quote: "아니 쓴 코드에 오류날까?",
  },
  {
    quote: "에러가 무서워 코딩 못하랴",
  },
  {
    quote: "길고 짧은 것은 strlen 써봐야 안다",
  },
  {
    quote: "보기 좋은 코드가 디버깅 하기도 좋다",
  },
  {
    quote: "코딩 전 마음 다르고, 코딩 후 마음 다르다",
  },
];

const quote = document.querySelector("#quote span");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
