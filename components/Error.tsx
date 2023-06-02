import Image from "next/image";

import styles from "@/styles/Error.module.scss";

export default function ErrorComponent() {
  return (
    <div className={styles.ErrorContainer}>
      <div>
        <Image src="/images/error.svg" height={400} width={400} alt="logo" />
        <p className={styles.Message}>An error occurred while fetching news</p>
      </div>
    </div>
  );
}
