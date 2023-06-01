import Image from "next/image";
import moment from "moment";
import styles from "@/styles/LatestPostNewsSummary.module.scss";
import { TNews } from "@/pages/post";

export default function LatestPostNewsSummary({
  author,
  publishedAt,
  title,
  urlToImage,
}: TNews) {
  return (
    <div className={`${styles.Container}`}>
      <div className={styles.Top}>
        <div className={styles.ImageContainer}>
          <Image
            style={{ objectFit: "cover" }}
            src={urlToImage}
            width={295}
            height={312}
            alt="logo"
            className={styles.Image}
          />
        </div>
        <div className={styles.Tag}>Tag</div>
      </div>
      <div className={styles.Bottom}>
        <h5>{title}</h5>

        <p>
          {author} <span>{moment(publishedAt).fromNow()}</span>
        </p>
      </div>
    </div>
  );
}
