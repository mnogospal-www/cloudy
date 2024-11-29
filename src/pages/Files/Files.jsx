import { FilesList } from './components/exporter';

function Files({ appearance }) {
  const personalFiles = [
    {
      id: 1,
      name: 'Имя файла 1.png',
      accesses: [
        {
          fullname: 'name last_name',
          email: 'admin@admin.ru',
        },
        {
          fullname: 'name2 last_name2',
          email: 'admin2@admin2.ru',
        },
      ],
    },
    {
      id: 2,
      name: 'Имя файла 1.jpg',
      accesses: [
        {
          fullname: 'name last_name',
          email: 'admin@admin.ru',
        },
      ],
    },
    {
      id: 1,
      name: 'Имя файла 1.png',
      accesses: [
        {
          fullname: 'name last_name',
          email: 'admin@admin.ru',
        },
        {
          fullname: 'name2 last_name2',
          email: 'admin2@admin2.ru',
        },
      ],
    },
    {
      id: 2,
      name: 'Имя файла 1.jpg',
      accesses: [
        {
          fullname: 'name last_name',
          email: 'admin@admin.ru',
        },
      ],
    },
    {
      id: 1,
      name: 'Имя файла 1.png',
      accesses: [
        {
          fullname: 'name last_name',
          email: 'admin@admin.ru',
        },
        {
          fullname: 'name2 last_name2',
          email: 'admin2@admin2.ru',
        },
      ],
    },
    {
      id: 2,
      name: 'Имя файла 1.jpg',
      accesses: [
        {
          fullname: 'name last_name',
          email: 'admin@admin.ru',
        },
      ],
    },
    {
      id: 1,
      name: 'Имя файла 1.png',
      accesses: [
        {
          fullname: 'name last_name',
          email: 'admin@admin.ru',
        },
        {
          fullname: 'name2 last_name2',
          email: 'admin2@admin2.ru',
        },
      ],
    },
    {
      id: 2,
      name: 'Имя файла 1.jpg',
      accesses: [
        {
          fullname: 'name last_name',
          email: 'admin@admin.ru',
        },
      ],
    },
  ];

  const sharedFiles = [
    {
      id: 'qweasd1234',
      name: 'Имя файла.png',
      author: 'admin@gmail.com',
    },
    {
      id: 'aaaaaaaaaa',
      name: 'Имя файла 2.png',
      author: 'admin@gmail.com',
    },
  ];

  return (
    <>
      {appearance === 'personal' && <FilesList files={personalFiles} />}
      {appearance === 'shared' && <FilesList files={sharedFiles} />}
    </>
  );
}

export { Files };
