import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.eVentstagesSection}>
      <p className={styles.pasKumaOrganizAnasPo}>Pasākuma organizēšanas posmi</p>
      <p className={styles.piedzVojumsSKasJauNo}>
        Piedzīvojums sākas jau no brīža, kad aizpildi pieteikumu.
        <br />
        Šie ir seši vienkārši soļi līdz lieliskam pasākumam – mēs iesaistāmies katrā
        no tiem.
      </p>
      <div className={styles.autoWrapper}>
        <div className={styles.rectangle212}>
          <p className={styles.solisNr1}>Solis Nr.1</p>
          <p className={styles.izvLiesPasKumu}>Izvēlies pasākumu</p>
        </div>
        <div className={styles.rectangle2122}>
          <p className={styles.solisNr1}>Solis Nr.2</p>
          <p className={styles.saEmProgrammasPiedVj}>
            Saņem programmas piedāvājumu
          </p>
        </div>
        <div className={styles.rectangle2123}>
          <p className={styles.solisNr1}>Solis Nr.3</p>
          <p className={styles.kopGiPielGojamProgra}>
            Kopīgi&nbsp;&nbsp;pielāgojam programmu
          </p>
        </div>
        <div className={styles.rectangle2124}>
          <p className={styles.solisNr1}>Solis Nr.4</p>
          <p className={styles.programmasSaskaOAna}>Programmas saskaņošana</p>
        </div>
        <div className={styles.rectangle2125}>
          <p className={styles.solisNr1}>Solis Nr.5</p>
          <p className={styles.pasKumsNotiek}>Pasākums notiek!</p>
        </div>
        <div className={styles.rectangle2126}>
          <p className={styles.solisNr1}>Solis Nr.6</p>
          <p className={styles.daliesArAtsauksmi}>Dalies ar&nbsp;&nbsp;atsauksmi</p>
        </div>
      </div>
      <div className={styles.autoWrapper2}>
        <img src="../image/mf7uo2sx-q29ac04.svg" className={styles.vector} />
        <p className={styles.jaEsiJauPiedalJiesMs3}>
          <span className={styles.jaEsiJauPiedalJiesMs}>
            Ja esi jau piedalījies mūsu pasākumos, iesniedz atsauksmi un saņem&nbsp;
          </span>
          <span className={styles.jaEsiJauPiedalJiesMs2}>BONUSU&nbsp;</span>
          <span className={styles.jaEsiJauPiedalJiesMs}>
            savam pasākumam jau tagad!
          </span>
        </p>
        <div className={styles.rectangle193}>
          <p className={styles.button}>iesniedz atsauksmi</p>
        </div>
      </div>
    </div>
  );
}

export default Component;
