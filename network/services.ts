import Http from "./index";

export const fetchNews = (pageSize: number, page: number) => {
  return Http.get(
    `/everything?q=tesla&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&page=${page}&pageSize=${pageSize}`
  );
};
