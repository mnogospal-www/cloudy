import { createBrowserRouter, RouterProvider } from 'react-router';
import { DefaultLayout, FilesLayout } from './layouts/exporter';
import { FormAccess, Files, UploadFile } from './pages/exporter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: 'registration',
        element: <FormAccess appearance={'registration'} />,
      },
      {
        path: 'authorization',
        element: <FormAccess appearance={'authorization'} />,
      },
      {
        path: 'files',
        element: <FilesLayout />,
        children: [
          {
            index: true,
            element: <Files appearance={'personal'} />,
          },
          {
            path: 'shared',
            element: <Files appearance={'shared'} />,
          },
          {
            path: 'upload',
            element: <UploadFile />,
          },
        ],
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export { Router };
