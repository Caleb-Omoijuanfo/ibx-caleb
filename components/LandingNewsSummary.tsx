import Image from "next/image";
import { Mulish } from "next/font/google";
import styles from "@/styles/LandingNewsSummary.module.scss";

export default function LandingNewsSummary({ url }: { url: string }) {
  return (
    <div className={`${styles.Container} container overflow-hidden p-0`}>
      <div className="row gx-4">
        <div className="col-4">
          <div className={styles.Image}>
            {url && (
              <Image
                style={{ objectFit: "cover" }}
                src={url}
                width={162}
                height={312}
                alt="logo"
                className={styles.Image}
                loading="lazy"
              />
            )}
          </div>
        </div>
        <div className="col-8 pt-4">
          <p className={styles.TimeStamp}>
            Innovation <span>2 Hours ago</span>
          </p>

          <h6>7 ways you can reduce climate change</h6>
        </div>
      </div>
    </div>
  );
}
