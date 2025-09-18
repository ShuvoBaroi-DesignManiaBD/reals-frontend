import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.bLogSection}>
      <p className={styles.sociLAtbildBa}>Sociālā atbildība</p>
      <p className={styles.daUNoMSuDarbaUnSirds}>
        Daļu no mūsu darba un sirds mēs veltām labdarības pasākumiem – bērniem no
        sociāli mazaizsargātām grupām, daudzbērnu ģimenēm un senioriem.
        <br />
        Mēs ticam, ka prieks, kustība un kopā būšana ir tiesības, nevis privilēģija.
      </p>
      <div className={styles.autoWrapper}>
        <div className={styles.latvijaAugKoki}>
          <img
            src="../image/mfo25jk3-t2irdbc.png"
            className={styles.sportaSpelesWwwReals}
          />
          <div className={styles.rectangle202}>
            <p className={styles.apstDSimLatvijuArAug}>
              Apstādīsim Latviju ar augļkokiem
            </p>
          </div>
        </div>
        <div className={styles.simtgadniekuSalidoju}>
          <img
            src="../image/mfo25jk3-d08hwkv.png"
            className={styles.sportaSpelesWwwReals}
          />
          <div className={styles.rectangle2022}>
            <p className={styles.apstDSimLatvijuArAug}>Simtgadnieku salidojums</p>
          </div>
        </div>
        <div className={styles.latvijaAugKoki}>
          <img
            src="../image/mfo25jk3-1brq409.png"
            className={styles.sportaSpelesWwwReals}
          />
          <div className={styles.rectangle202}>
            <p className={styles.apstDSimLatvijuArAug}>
              Uzticams partneris veselības veicināšanā
            </p>
          </div>
        </div>
      </div>
      <div className={styles.autoWrapper2}>
        <img src="../image/mfo25jju-fw3n3tp.svg" className={styles.arrowDown} />
        <p className={styles.gribiAtbalstTVaiUzdV}>
          Gribi atbalstīt vai uzdāvināt kādam piedzīvojumu?
          <br />
          Raksti mums un mēs pastāstīsim, kā vari iesaistīties.
        </p>
        <div className={styles.rectangle193}>
          <p className={styles.button}>sazināties</p>
        </div>
      </div>
    </div>
  );
}

export default Component;
