import $ from './form.module.css';

function Form({ children }) {
  return <form className={$['form']}>{children}</form>;
}

export { Form };
