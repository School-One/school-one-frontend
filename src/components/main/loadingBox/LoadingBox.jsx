import React from 'react';
import styles from './LoadingBox.module.css';

export default function LoadingBox() {
  return (
    <div className={styles.loading}>
      <i className="fa fa-spinner fa-spin" />
      {' '}
      Cargando...
    </div>
  );
}
