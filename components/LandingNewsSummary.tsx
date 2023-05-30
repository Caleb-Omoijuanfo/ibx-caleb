import Image from "next/image";
import { Mulish } from "next/font/google";
import styles from "@/styles/LandingNewsSummary.module.scss";

const mulish = Mulish({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function LandingNewsSummary() {
  return (
    <div className={`${styles.Container} container overflow-hidden p-0`}>
      <div className="row gx-4">
        <div className="col-4">
          <div className={styles.Image}>Hello</div>
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
