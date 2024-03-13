import Link from "next/link";
import style from "./item.module.scss";
import { Item } from "@/app/page";

export default function ItemBlok({ props }: { props: Item }): JSX.Element {
  return (
    <div>
      <div>{props.name}</div>
      {/* <div>
        <Link src={items.href}> {items.href}</Link>
      </div> */}
    </div>
  );
}
