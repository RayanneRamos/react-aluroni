import React from 'react';
import { ReactComponent as LogoImg} from 'assets/aluroni.svg';
import styles from './Menu.module.scss';

function Menu() {

  const rotas = [{
    label: 'Inicio',
    to: '/',
  }, {
    label: 'Cardapio',
    to: '/cardapio',
  }, {
    label: 'Sobre',
    to: '/sobre',
  }];

  return(
    <nav className={styles.menu}>
      <LogoImg />
      <ul className={styles.menu__list}>
        { rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <a href={rota.to}>
              {rota.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { Menu };