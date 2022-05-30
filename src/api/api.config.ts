const myApi = "https://api.github.com";

type ApiType = {
  method?: string;
  data?: any;
  url?: string;
};

const api = ({ method, data, url = "" }: ApiType) =>
  fetch(myApi + url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

const apiConfig = {
  get: (url: string) => api({ url, method: "GET" }),
};

export default apiConfig;
