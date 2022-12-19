import style from "../styles/Button.module.css";
import Link from "next/link";

export default function Button({ link, children }) {
  return (
    <Link href={link} className={style.btn}>{children}</Link>
  )
}