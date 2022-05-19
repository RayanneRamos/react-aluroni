import style from './Cardapio.module.scss';
import { ReactComponent as LogoImg} from 'assets/aluroni.svg';

function Cardapio() {
  return(
    <main>
      <nav className={style.menu}>
        <LogoImg />
      </nav>
    </main>
  );
}

export default Cardapio;