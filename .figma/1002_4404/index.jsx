import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.rectangle221}>
      <div className={styles.autoWrapper}>
        <p className={styles.pieteiktiesPasKumam}>Pieteikties pasākumam!</p>
        <div className={styles.rectangle215}>
          <p className={styles.vRds}>Vārds *</p>
        </div>
      </div>
      <div className={styles.autoWrapper3}>
        <p className={styles.aizpildiSuPieteikuma}>
          Aizpildi īsu pieteikuma formu, un mēs Tev atsūtīsim piemērotāko pasākuma
          programmas piedāvājumu.
          <br />
          Tu vari izvēlēties no jau gatavām programmām vai saņemt pielāgotu
          risinājumu tieši Tavam kolektīvam, klasei vai ģimenei.
          <br />
          Mēs sazināsimies tuvāko 1–2 darba dienu laikā!
        </p>
        <div className={styles.autoWrapper2}>
          <div className={styles.rectangle38}>
            <p className={styles.vRds}>Uzņēmuma nosaukums</p>
          </div>
          <div className={styles.rectangle39}>
            <p className={styles.epasts}>Epasts *</p>
          </div>
          <div className={styles.rectangle211}>
            <p className={styles.tLrunis}>Tālrunis *</p>
          </div>
        </div>
      </div>
      <div className={styles.rectangle193}>
        <p className={styles.button}>Iesniegt Anketu</p>
      </div>
    </div>
  );
}

export default Component;
