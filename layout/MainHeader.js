import Link from 'next/link';
import style from '../styles/MainHeader.module.css';

export default function MainHeader() {
  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <Link href='/'>NextEveents</Link>
        </div>
        <nav className={style.navigation}>
          <ul>
            <li>
              <Link href='/events'>Browse All Events</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
