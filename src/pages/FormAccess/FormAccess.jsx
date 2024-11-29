import { Authorization, Registration } from './components/exporter';
import $ from './form-acces.module.css';

function FormAccess({ appearance }) {
  return (
    <main className={$['form-access-wrapper']}>
      {appearance === 'authorization' && <Authorization />}
      {appearance === 'registration' && <Registration />}
    </main>
  );
}

export { FormAccess };
