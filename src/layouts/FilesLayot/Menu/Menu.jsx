import { Link } from 'react-router';
import $ from './menu.module.css';

function Menu() {
  return (
    <div className={$['menu']}>
      <Link to={'upload'}>Загрузить файл</Link>
      <Link to={'.'}>Загруженные файлы</Link>
      <Link to={'shared'}>Доступные файлы</Link>
    </div>
  );
}

export { Menu };
