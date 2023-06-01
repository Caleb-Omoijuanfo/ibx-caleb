import { useEffect, useState } from "react";
import { useAppDispatch } from "@/app/hooks";
import LargeHorizontalPostSummary from "@/components/LargeHorizontalPostSummary";
import { getNews } from "@/app/feature/news/newsSlice";
import Paginator from "@/components/Pagination/Pagination";
import { useAppSelector } from "@/app/hooks";

import styles from "@/styles/AllNews.module.scss";

export type TNews = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: null | number;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
};

export default function Post() {
  const [pageOffset, setPageOffset] = useState(1);
  const [pageCount, setPageCount] = useState(10);
  const [pageSize] = useState(10);

  const handlePageChange = (event: any) => {
    setPageOffset(event.selected + 1);
  };

  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNews({ pageSize, page: pageOffset }));
  }, []);

  return (
    <div className={styles.AllNewsContainer}>
      <h4>News</h4>
      {news.loading
        ? "Loading..."
        : news?.news?.articles.map((_news: TNews, index: number) => (
            <LargeHorizontalPostSummary key={index} {..._news} />
          ))}

      <div className={styles.Pagination}>
        <Paginator
          pageCount={pageCount}
          pageOffset={pageOffset}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
