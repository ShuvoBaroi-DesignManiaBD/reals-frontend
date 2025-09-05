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
      <img src="../image/mf6ed80p-h78v07n.png" className={styles.group1000001806} />
      <div className={styles.autoWrapper}>
        <img
          src="../image/mf6ed80v-ht0h353.png"
          className={styles.berniemPasakumiBalli}
        />
        <img
          src="../image/mf6ed80v-mqe8acc.png"
          className={styles.berniemPasakumiBalli}
        />
        <img
          src="../image/mf6ed80v-7bboa38.png"
          className={styles.berniemPasakumiBalli}
        />
      </div>
      <div className={styles.autoWrapper}>
        <img
          src="../image/mf6ed80v-2aa3s74.png"
          className={styles.berniemPasakumiBalli}
        />
        <img
          src="../image/mf6ed80v-t2fudma.png"
          className={styles.berniemPasakumiBalli}
        />
        <img
          src="../image/mf6ed80v-3ifdaqs.png"
          className={styles.berniemPasakumiBalli}
        />
      </div>
      <div className={styles.autoWrapper2}>
        <img src="../image/mf6ed80p-w5pk2aj.svg" className={styles.vector} />
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
