import $ from './input.module.css';

function Input({ ...props }) {
  return <input className={$['input']} {...props} />;
}

export { Input };
