import styles from './Cardapio.module.scss';
import { ReactComponent as LogoImg} from 'assets/aluroni.svg';

function Cardapio() {
  return(
    <main>
      <nav className={styles.menu}>
        <LogoImg />
      </nav>
      <header className={styles.header}>
        <div className={styles.headerText}>
          A casa do código e da massa
        </div>
      </header>
    </main>
  );
}

export default Cardapio;