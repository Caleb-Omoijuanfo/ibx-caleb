import Image from "next/image";
import { Mulish } from "next/font/google";
import moment from "moment";
import styles from "@/styles/LargeHorizontalPostSummary.module.scss";
import { TNews } from "@/pages/post";

const mulish = Mulish({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function LargeHorizontalPostSummary({
  author,
  content,
  description,
  publishedAt,
  source,
  title,
  url,
  urlToImage,
}: TNews) {
  return (
    <div className={`${styles.Container} container overflow-hidden p-0`}>
      <div className="row gx-5">
        <div className="col-5">
          <div className={styles.ImageContainer}>
            <Image
              src={urlToImage ? urlToImage : "/images/family.webp"}
              height={800}
              width={500}
              alt="logo"
              className={styles.Image}
            />
          </div>
        </div>
        <div className="col-7">
          <div className={styles.TextContainer}>
            <h5>{title}</h5>
            <p className={styles.TimeStamp}>
              {author} <span>{moment(publishedAt).fromNow()}</span>
            </p>

            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
