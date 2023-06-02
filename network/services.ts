import Http from "./index";

export const fetchNews = (pageSize: number, page: number, sources?: string) => {
  if (sources) {
    return Http.get(
      `/everything?q=tesla&sources=${sources}&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&page=${page}&pageSize=${pageSize}`
    );
  }
  return Http.get(
    `/everything?q=tesla&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&page=${page}&pageSize=${pageSize}`
  );
};

export const fetchSources = () => {
  return Http.get(
    `/top-headlines/sources?language=en&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );
};
