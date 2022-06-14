import React from 'react';
import styles from './Footer.module.scss';
import { ReactComponent as Aluroni } from 'assets/aluroni.svg';

function Footer() {
  return(
    <footer className={styles.footer}>
      <Aluroni />
    </footer>
  );
}

export { Footer };