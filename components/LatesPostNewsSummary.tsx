import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import styles from "@/styles/LatestPostNewsSummary.module.scss";
import { TNews } from "@/pages/post";
import { update } from "@/app/feature/news/singlePostSlice";
import { useAppDispatch } from "@/app/hooks";

export default function LatestPostNewsSummary({
  author,
  publishedAt,
  title,
  urlToImage,
  content,
  description,
}: TNews) {
  const dispatch = useAppDispatch();

  return (
    <div className={`${styles.Container}`}>
      <div className={styles.Top}>
        <div className={styles.ImageContainer}>
          {urlToImage && (
            <Image
              style={{ objectFit: "cover" }}
              src={urlToImage}
              width={295}
              height={312}
              alt="logo"
              className={styles.Image}
              loading="lazy"
            />
          )}
        </div>
        <div className={styles.Tag}>Tag</div>
      </div>
      <div className={styles.Bottom}>
        <Link
          href={{
            pathname: "/post/[title]",
          }}
          as={`/post/${title}`}
          onClick={() =>
            dispatch(
              update({ author, description, content, publishedAt, title })
            )
          }
        >
          <h5>{title}</h5>
        </Link>

        <p>
          {author} <span>{moment(publishedAt).fromNow()}</span>
        </p>
      </div>
    </div>
  );
}
