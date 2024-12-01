import { useState } from 'react';
import { Button, Form } from '../../../components/exporter';
import { FileInput, UploadFiles } from './components/exporter';
import $ from './upload-file-form.module.css';

function UploadFileForm() {
  const [files, setFiles] = useState([]);

  function onFileUpload({ target }) {
    [...target.files].map((file, i) =>
      setFiles((previousState) => [...previousState, file])
    );
  }

  function deleteFile(name) {
    setFiles(files.filter((file) => file.name !== name));
  }

  return (
    <Form>
      <div className={$['upload-form-wrapper']}>
        <div className={$['buttons-wrapper']}>
          <FileInput onChange={onFileUpload} />
          {files.length > 0 && <Button>Загрузить</Button>}
        </div>

        <h1>{files.length === 0 ? 'Файлы не выбраны' : 'Выбраные файлы:'}</h1>
        {files.length > 0 && <UploadFiles files={files} deleteFile={deleteFile} />}
      </div>
    </Form>
  );
}

export { UploadFileForm };
