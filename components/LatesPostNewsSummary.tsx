import Image from "next/image";

import styles from "@/styles/LatestPostNewsSummary.module.scss";

interface ILatestPostNewsSummary {
  tag?: string;
  imageUrl?: string;
}

export default function LatestPostNewsSummary({
  tag,
  imageUrl = "",
}: ILatestPostNewsSummary) {
  return (
    <div className={`${styles.Container}`}>
      <div className={styles.Top}>
        <div className={styles.Image}>
          <Image
            style={{ objectFit: "cover" }}
            src={imageUrl}
            width={295}
            height={312}
            alt="logo"
          />
        </div>
        <div className={styles.Tag}>{tag}</div>
      </div>
      <div className={styles.Bottom}>
        <h5>
          Charge Two Devices at the Same Time With This Magnetic Wireless
          Charging Dock
        </h5>

        <p>Floyed Miles 3 Days ago</p>
      </div>
    </div>
  );
}
