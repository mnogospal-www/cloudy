import { Link } from 'react-router';
import { Logo } from '../../../../components/exporter';
import $ from './header.module.css';

function Header() {
  return (
    <div className={$['header']}>
      <nav>
        <Link to='authorization'>Авторизация</Link>
        <Link to='registration'>Регистрация</Link>
        <Link to='files'>Хранилище</Link>
      </nav>

      <Logo />
    </div>
  );
}

export { Header };
