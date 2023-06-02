import { useEffect, useState } from "react";

import { useAppDispatch } from "@/app/hooks";
import LargeHorizontalPostSummary from "@/components/LargeHorizontalPostSummary";
import { getNews } from "@/app/feature/news/newsSlice";
import Paginator from "@/components/Pagination/Pagination";
import { useAppSelector } from "@/app/hooks";

import styles from "@/styles/AllNews.module.scss";
import ErrorComponent from "@/components/Error";
import { getSourceQuery } from "@/app/feature/news/sourceSlice";
import EmptyComponent from "@/components/Empty";

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
  const [pageOffset, setPageOffset] = useState(0);
  const [pageCount] = useState(10);
  const [pageSize] = useState(10);

  const handlePageChange = (event: any) => {
    setPageOffset(event.selected);
  };

  const dispatch = useAppDispatch();
  const { news, source } = useAppSelector((state) => state);

  const renderItems = () => {
    if (news?.error) {
      return <ErrorComponent errorMessage={news?.news?.message} />;
    } else if (!news?.error && news?.news?.articles.length < 1) {
      return <EmptyComponent />;
    } else if (news?.loading) {
      return "Loading...";
    } else {
      return (
        <div className={styles.PostList}>
          {news?.news?.articles.map((_news: TNews, index: number) => (
            <LargeHorizontalPostSummary key={index} {..._news} />
          ))}
        </div>
      );
    }
  };

  useEffect(() => {
    dispatch(
      getNews({
        pageSize,
        page: pageOffset + 1,
        sources: { query: source?.sourceQuery },
      })
    );
  }, [pageOffset, source?.sourceQuery]);

  useEffect(() => {
    return () => {
      // remove source param from state when this component is unmounted.
      dispatch(getSourceQuery({ query: "" }));
    };
  }, []);

  return (
    <div className={styles.AllNewsContainer}>
      <h4>News</h4>

      {/* {news?.error ? (
        <ErrorComponent errorMessage={news?.news?.message} />
      ) : news.loading ? (
        "Loading..."
      ) : (
        <div className={styles.PostList}>
          {news?.news?.articles.map((_news: TNews, index: number) => (
            <LargeHorizontalPostSummary key={index} {..._news} />
          ))}
        </div>
      )} */}
      {renderItems()}

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
