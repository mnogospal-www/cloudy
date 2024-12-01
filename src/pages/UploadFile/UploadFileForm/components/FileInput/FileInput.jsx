import $ from './file-input.module.css';

function FileInput({ ...props }) {
  return (
    <div className={$['file-input']}>
      <input type={'file'} id={'vanila-file-input'} multiple {...props} />
      <label htmlFor={'vanila-file-input'}>Выбрать файл</label>
    </div>
  );
}

export { FileInput };
