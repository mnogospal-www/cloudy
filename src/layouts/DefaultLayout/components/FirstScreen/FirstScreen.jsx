import $ from './first-screen.module.css';

function FirstScreen({ children }) {
  return <div className={$['first-screen']}>{children}</div>;
}

export { FirstScreen };
