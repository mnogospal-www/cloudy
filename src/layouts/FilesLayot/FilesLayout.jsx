import { Outlet, useLocation } from 'react-router';
import { Menu } from './Menu/Menu';
import $ from './files-layout.module.css';

const locationTitles = {
  '/files': 'Мои файлы',
  '/files/upload': 'Загрузить файлы',
  '/files/shared': 'Доступные мне файлы',
};

function FilesLayout() {
  const location = useLocation();

  return (
    <main className={$['files-layout']}>
      <div className={$['menu-wrapper']}>
        <Menu />
        <h1>{locationTitles[location.pathname]}</h1>
      </div>

      <Outlet />
    </main>
  );
}

export { FilesLayout };
