import React from 'react';
import styles from './Item.module.scss';
import cardapio from 'data/cardapio.json';
import classNames from 'classnames';
import { Prato } from 'types/Prato';
import { TagsPrato } from 'components/TagsPrato';

function Item(props: Prato) {

  const { title, description, category, size, serving, price, photo } = props;

  return(
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TagsPrato {...props} />
      </div>
    </div>
  );
}

export { Item };