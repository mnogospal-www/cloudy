import { Button } from '../../../../components/exporter';
import { getFileExtension } from '../../../../helpers/exporter';
import { AccessedUsers } from './AccessedUsers/AccessedUsers';
import $ from './file-card.module.css';

function FileCard(file) {
  const fileExtension = getFileExtension(file.name);

  return (
    <div className={$[file.order]}>
      <div className={$['file-stats']}>
        <div>
          Автор: {file.author ? <a href={`mailto:${file.author}`}>{file.author}</a> : 'я'}
        </div>
        <div className={$['file-name']}>{file.name}</div>
        <div>Расширение: {fileExtension}</div>
        {file.accesses?.length > 0 && <AccessedUsers accesses={file.accesses} />}
      </div>

      <div className={$['button-wrapper']}>
        <Button>Скачать</Button>
        <Button>Удалить</Button>
      </div>
    </div>
  );
}

export { FileCard };
