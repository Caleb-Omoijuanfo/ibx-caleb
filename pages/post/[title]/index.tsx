import moment from "moment";
import { useAppSelector } from "@/app/hooks";
import { Mulish } from "next/font/google";

import styles from "../../../styles/Post.module.scss";

const mulish = Mulish({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const SinglePost = () => {
  const singlePost = useAppSelector((state) => state?.singlePost);

  return (
    <div>
      <div className={`${styles.SinglePostContainer} ${mulish.className}`}>
        <div className="container overflow-hidden">
          <div className="row gx-4">
            <div className={`${styles.LeftContainer} col-7`}>
              <p>
                {singlePost?.author}{" "}
                <span>{moment(singlePost?.publishedAt).fromNow()}</span>
              </p>
              <h1 className={styles.LeftBoldTexts}>{singlePost.title}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.Story}>{singlePost?.content}</div>
    </div>
  );
};

export default SinglePost;
