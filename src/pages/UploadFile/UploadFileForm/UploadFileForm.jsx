import { Form, Button } from '../../../components/exporter';
import $ from './upload-file-form.module.css';

function UploadFileForm() {
  return (
    <div className={$['form-wrapper']}>
      <Form>
        <input
          type={'file'}
          className={$['vanila-input']}
          id={'vanila-input'}
          name={'file'}
        />
        <label htmlFor='vanila-input'>Выберите файл</label>

        <Button>Загрузить</Button>
      </Form>
    </div>
  );
}

export { UploadFileForm };
