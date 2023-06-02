import Router from "next/router";

import { Mulish } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import LandingNewsSummary from "@/components/LandingNewsSummary";
import Button from "@/components/Buttons/Button";
import LatestPostNewsSummary from "@/components/LatesPostNewsSummary";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useEffect, useState } from "react";
import { getNews } from "@/app/feature/news/newsSlice";
import { TNews } from "./post";
import ErrorComponent from "@/components/Error";
import EmptyComponent from "@/components/Empty";

const mulish = Mulish({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [pageOffset] = useState(1);
  const [pageSize] = useState(8);

  const handleNavigate = () => {
    Router.push("/post");
  };
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.news);

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
            <LatestPostNewsSummary key={index} {..._news} />
          ))}
        </div>
      );
    }
  };

  useEffect(() => {
    dispatch(getNews({ pageSize, page: pageOffset }));
  }, []);

  return (
    <div>
      <div className={`${styles.LandingTop} ${mulish.className}`}>
        <div className="container overflow-hidden">
          <div className="row gx-4">
            <div className={`${styles.LeftContainer} col-6`}>
              <p>
                Innovation <span>2 Hours ago</span>
              </p>
              <h1 className={styles.LeftBoldTexts}>
                Charge Two Devices at the Same Time With This Magnetic Wireless
                Charging Dock
              </h1>
            </div>
            <div className={`${styles.RightContainer} col-6`}>
              <div className={styles.RightMainCard}>
                <h4 className="mb-3">Popular this week</h4>

                <LandingNewsSummary />
                <LandingNewsSummary />
                <LandingNewsSummary />
                <LandingNewsSummary />
                <LandingNewsSummary />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.LatestPostContainer}>
        <div className={styles.Header}>
          <h4>Our Latest Post</h4>
          <Button
            text="View All"
            backgroundColor="#F36326"
            textColor="#ffffff"
            onClick={handleNavigate}
          />
        </div>

        {renderItems()}
      </div>
    </div>
  );
}
