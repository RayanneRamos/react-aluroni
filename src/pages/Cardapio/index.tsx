import styles from './Cardapio.module.scss';
import { ReactComponent as LogoImg} from 'assets/aluroni.svg';
import Buscador from './Buscador';
import { useState } from 'react';

function Cardapio() {
  
  const [ busca, setBusca ] = useState("");
  
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
      <section className={styles.cadarpio}>
        <h3 className={styles.cardapioTitulo}>Cardápio</h3>
        <Buscador 
          busca={busca} 
          setBusca={setBusca} 
        />
      </section>
    </main>
  );
}

export default Cardapio;