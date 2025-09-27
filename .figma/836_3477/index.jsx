import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.heroSection}>
      <img src="../image/mfzmx64n-8r8x5f1.png" className={styles.sportaSpeles} />
      <div className={styles.autoWrapper}>
        <p className={styles.sportaSpLes}>Sporta spēles</p>
        <p className={styles.saEmPozitVoEnerIjuTa}>
          Saņem pozitīvo enerģiju Tavām Biznesa uzvarām!
        </p>
        <p className={styles.sportaSpLesAujIzbaud}>
          Sporta spēles ļauj izbaudīt plašu pozitīvo emociju gammu, izgaismo
          apslēptus talantus, jaunas spējas- Tava uzņēmuma attīstībai! <br />
          <br />
          Sporta spēles - ļauj izbaudīt plašu pozitīvo emociju gammu, pilnveidot
          individuālos un komandu talantus, atrast jaunus domubiedrus un draugus,
          atklāt jaunas personiskās un komandas spējas un izgaismo apslēptus
          talantus, uzlādē ar pozitīvo enerģiju un dod spēcīgu mudinājumu arī
          turpmāk dzīvot veselīgi un aktīvi! Sporta spēles brīvā dabā- piedod jaudu
          uzņēmuma "Turbīnai", ved Biznasa izaugsmi jaunās un augstākās
          virsotnēs!&nbsp;
        </p>
        <div className={styles.rectangle193}>
          <p className={styles.button}>saņem programmu UZREIZ</p>
        </div>
      </div>
    </div>
  );
}

export default Component;
