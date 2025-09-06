import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.coloursFonts}>
      <p className={styles.krSas}>Krāsas</p>
      <div className={styles.rectangle179} />
      <div className={styles.autoWrapper}>
        <div className={styles.rectangle175} />
        <div className={styles.rectangle180} />
      </div>
      <div className={styles.rectangle177} />
      <div className={styles.rectangle178} />
      <p className={styles.fonts}>Fonts</p>
      <p className={styles.spilgtKiePasKumiUzMu}>
        Spilgtākie pasākumi uzņēmumiem un ģimenēm
      </p>
      <div className={styles.autoWrapper3}>
        <div className={styles.autoWrapper2}>
          <p className={styles.noAlDzZ}>no A līdz Z</p>
          <p className={styles.poppins}>Poppins</p>
        </div>
        <p className={styles.regular}>Regular</p>
        <p className={styles.medium}>Medium</p>
      </div>
      <p className={styles.heading1}>Heading 1</p>
      <p className={styles.heading2}>Heading 2</p>
      <p className={styles.subheading}>Subheading</p>
      <p className={styles.paragraphTextBody}>Paragraph text (Body)</p>
      <p className={styles.smallLabelText}>Small/Label text</p>
      <p className={styles.buttonText}>Button text</p>
      <div className={styles.rectangle203} />
    </div>
  );
}

export default Component;
