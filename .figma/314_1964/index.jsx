import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.gAllerySection}>
      <p className={styles.pasKumiBildSUnVideo}>Pasākumi bildēs un video</p>
      <p className={styles.ieskatiesMSuPasKumuS}>
        Ieskaties mūsu pasākumu sajūtās – prieks, kustība, komanda un īsti cilvēki.
        <br />
        Šeit atradīsi foto un video no pasākumiem, kas notikuši skolās, uzņēmumos un
        ģimenēs visā Latvijā.
      </p>
      <img src="../image/mf57k85k-xqd2alw.png" className={styles.group1000001806} />
      <div className={styles.autoWrapper}>
        <img
          src="../image/mf57k85n-1673zx3.png"
          className={styles.berniemPasakumiBalli}
        />
        <img
          src="../image/mf57k85n-g0he75m.png"
          className={styles.berniemPasakumiBalli}
        />
        <img
          src="../image/mf57k85n-4rro69s.png"
          className={styles.berniemPasakumiBalli}
        />
      </div>
      <div className={styles.autoWrapper}>
        <img
          src="../image/mf57k85n-meibyfw.png"
          className={styles.berniemPasakumiBalli}
        />
        <img
          src="../image/mf57k85n-40bu1da.png"
          className={styles.berniemPasakumiBalli}
        />
        <img
          src="../image/mf57k85n-yw8lagb.png"
          className={styles.berniemPasakumiBalli}
        />
      </div>
      <div className={styles.autoWrapper2}>
        <img src="../image/mf57k85l-xtc14km.svg" className={styles.vector} />
        <p className={styles.gribiRedzTvlVairKApm}>
          Gribi redzēt vēl vairāk?
          <br />
          Apmeklē pilno galeriju vai seko mums sociālajos tīklos.
        </p>
        <div className={styles.rectangle193}>
          <p className={styles.button}>Skatīt visu galeriju</p>
        </div>
      </div>
    </div>
  );
}

export default Component;
