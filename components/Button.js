import style from '../styles/Button.module.css';
import Link from 'next/link';

export default function Button({ link, children, onClick }) {
  if (link) {
    return (
      <Link href={link} className={style.btn}>
        {children}
      </Link>
    );
  }

  return (
    <button className={style.btn} onClick={onClick}>
      {children}
    </button>
  );
}
