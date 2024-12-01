import { Button } from '../../../../../components/exporter';
import { getFileSize } from '../../../../../helpers/helpers';
import $ from './upload-files.module.css';

function UploadFiles({ files }) {
  return (
    <ol className={$['files']}>
      {files.map((file, i) => (
        <div className={$['file']} key={file.name}>
          <li>
            <div>Имя: {file.name}</div>
            <div>Размер: {getFileSize(file.size)}</div>
          </li>

          <Button onClick={() => deleteFile(file.name)}>Удалить</Button>
        </div>
      ))}
    </ol>
  );
}

export { UploadFiles };
