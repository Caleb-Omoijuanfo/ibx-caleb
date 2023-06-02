import Image from "next/image";

import styles from "@/styles/Error.module.scss";

export default function ErrorComponent({
  errorMessage = "An error occurred while fetching news",
}: {
  errorMessage?: string;
}) {
  return (
    <div className={styles.ErrorContainer}>
      <div className={styles.Error}>
        <Image src="/images/error.svg" height={400} width={400} alt="logo" />
      </div>
      <p className={styles.Message}>{errorMessage}</p>
    </div>
  );
}
