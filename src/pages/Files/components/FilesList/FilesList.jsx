import { FileCard } from '../FileCard/FileCard';
import $ from './file-list.module.css';

function FilesList({ files }) {
  return (
    <div className={$['file-list']}>
      {files.map((file, i) => (
        <FileCard {...file} order={i % 2 === 0 ? 'even' : 'odd'} key={file.id} />
      ))}
    </div>
  );
}

export { FilesList };
