import Link from "next/link";
import style from "./item.module.scss";
import { Item } from "@/app/page";

export default function ItemBlok({ props }: { props: Item }): JSX.Element {
  return (
    <div className={style.container}>
      <div>
        <Link href={props.href}> {props.name}</Link>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        delectus libero unde doloribus iusto aspernatur, itaque ipsum soluta ad
        explicabo et dolorum architecto impedit fugiat, facere magnam quaerat
        vel fuga?
      </p>
    </div>
  );
}
