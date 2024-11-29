import $ from './container.module.css';

function Container({ children }) {
  return <div className={$['container']}>{children}</div>;
}

export { Container };
