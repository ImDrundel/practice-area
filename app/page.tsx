import Image from "next/image";
import styles from "./page.module.scss";
import ItemBlock from "./components/item/item";
import { links } from "./_links";

export interface Item {
  id: number;
  name: string;
  href: string;
}

export default function Home() {
  return (
    <div className={styles.fullPage}>
      <header className={styles.header}></header>
      <main className={styles.main}>
        <div className={styles.container1}>
          {links.map((item: Item) => {
            return <ItemBlock props={item} key={item.id} />;
          })}
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
