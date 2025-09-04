import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.nEwsSection}>
      <div className={styles.autoWrapper}>
        <p className={styles.aktualitTes}>aktualitātes</p>
        <p className={styles.aktualitTeNr1OmNes}>Aktualitāte Nr.1 šomēnes</p>
        <p className={styles.a483}>483</p>
        <p className={styles.aReLsPiedzVojumsDrau}>
          “Reāls Piedzīvojums” draudzības dāvanu!
        </p>
        <div className={styles.rectangle193}>
          <p className={styles.button}>Saņemt draudzības dāvanu!&nbsp;</p>
        </div>
        <p className={styles.klientiJauSaMuI}>klienti jau saņēmuši</p>
      </div>
      <div className={styles.autoWrapper2}>
        <img src="../image/mf13y1wa-6anw7lz.png" className={styles.component101} />
        <div className={styles.group1000001927}>
          <div className={styles.ellipse1837} />
          <div className={styles.ellipse1838} />
          <div className={styles.ellipse1838} />
        </div>
      </div>
    </div>
  );
}

export default Component;
