import Image from "next/image";

import styles from "@/styles/Error.module.scss";

export default function EmptyComponent({
  emptyMessage = "There are currently no results for this search",
}: {
  emptyMessage?: string;
}) {
  return (
    <div className={styles.ErrorContainer}>
      <div className={styles.Error}>
        <Image src="/images/empty.svg" height={400} width={400} alt="logo" />
      </div>
      <p className={styles.Message}>{emptyMessage}</p>
    </div>
  );
}
