import { Logo } from '../../../../components/exporter';
import $ from './footer.module.css';

function Footer() {
  return (
    <div className={$['footer']}>
      <Logo />
      <div>&copy; 2024 CLOUDY. Все права защищены</div>
      <a href='mailto:>cloudy-support@gmail.com'>cloudy-support@gmail.com</a>
    </div>
  );
}

export { Footer };
