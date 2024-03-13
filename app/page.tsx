import Image from "next/image";
import styles from "./page.module.scss";
import ItemBlock from "./components/item/item";

export interface Item {
  // [index: number]: { id: number; name: string; href: string };
  id: number;
  name: string;
  href: string;
}
const links = [
  { id: 1, name: "YouTube", href: "" },
  { id: 2, name: "Spotify", href: "" },
  { id: 3, name: "Deezer", href: "" },
  { id: 4, name: "Serega", href: "" },
];

export default function Home() {
  return (
    <div className={styles.fullPage}>
      <header className={styles.header}></header>
      <main className={styles.main}>
        {links.map((item: Item) => {
          return <ItemBlock props={item} key={item.id} />;
        })}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
