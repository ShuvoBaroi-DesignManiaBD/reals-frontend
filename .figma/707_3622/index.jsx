import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.rectangle163}>
      <div className={styles.kindsOfEvents}>
        <p className={styles.kDasSportaSpLesMsrKo}>
          Kādas sporta spēles mēs rīkojam?
        </p>
        <div className={styles.autoWrapper}>
          <div className={styles.rectangle139}>
            <p className={styles.komanduSportaSpLes}>Komandu sporta spēles</p>
            <p className={styles.uzdevumiKasVeicinaSa}>
              Uzdevumi, kas veicina sadarbību, stratēģisko domāšanu un uzticēšanos.
              Komandas cīnās par rezultātu kopā – nevis atsevišķi.
            </p>
          </div>
          <div className={styles.rectangle139}>
            <p className={styles.komanduSportaSpLes}>Sporta spēles ar bumbu</p>
            <p className={styles.uzdevumiKasVeicinaSa}>
              Tautas bumba, futbols ar šķēršļiem, bamper bumbas, mini volejbols –
              spēles, kas ienes kustību un prieku jebkurā pasākumā.
            </p>
          </div>
          <div className={styles.rectangle141}>
            <p className={styles.komanduSportaSpLes}>Sporta spēles brīvā dabā</p>
            <p className={styles.uzdevumiKasVeicinaSa}>
              Svaigs gaiss, plašums un aktivitātes mežos, parkos vai pie ūdens.
              Ideālas vasaras sezonai un piedzīvojumu garam.
            </p>
          </div>
        </div>
        <div className={styles.autoWrapper2}>
          <div className={styles.rectangle141}>
            <p className={styles.komanduSportaSpLes}>Sporta spēles telpās</p>
            <p className={styles.uzdevumiKasVeicinaSa}>
              Pielāgotas programmas ziemai vai sliktākiem laikapstākļiem – sporta
              zālēs, industriālās telpās, hallēs vai ofisa vidē.
            </p>
          </div>
          <div className={styles.rectangle141}>
            <p className={styles.komanduSportaSpLes}>Tradicionālās sporta spēles</p>
            <p className={styles.uzdevumiKasVeicinaSa}>
              Klasiskās disciplīnas: stafetes, virves vilkšana, šķēršļu joslas,
              olimpiskā gaisotne. Pārbaudītas vērtības un garantēts efekts.
            </p>
          </div>
          <div className={styles.rectangle144}>
            <p className={styles.netradicionLsSportaS}>
              Netradicionālās sporta spēles
            </p>
            <p className={styles.uzdevumiKasVeicinaSa}>
              Spēles ar pārsteigumu un humoru: piemēram, milzu krekli, “aklās”
              disciplīnas, tematiskas misijas un improvizēti uzdevumi.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.svarGKaisSum2}>
        <p className={styles.svarGKaisSum}>Svarīgākais īsumā</p>
        <div className={styles.autoWrapper3}>
          <div className={styles.ilgums3}>
            <img src="../image/mg0iypnm-3kjlvy2.svg" className={styles.ilgums} />
            <p className={styles.ilgums2}>Ilgums</p>
            <p className={styles.a248Stundas}>2–48 stundas</p>
          </div>
          <div className={styles.dalBniekuSkaits2}>
            <img
              src="../image/mg0iypnm-bra97tc.svg"
              className={styles.dalBniekuSkaits}
            />
            <p className={styles.ilgums2}>Dalībnieku skaits</p>
            <p className={styles.a1510000}>15-10 000</p>
          </div>
          <div className={styles.lokCija2}>
            <img src="../image/mg0iypnn-y8cq336.svg" className={styles.lokCija} />
            <p className={styles.ilgums2}>Lokācija</p>
            <p className={styles.latvijUnBaltijBrVDab}>
              Latvijā un Baltijā, Brīvā dabā un iekštelpās
            </p>
          </div>
          <div className={styles.pieejamBa2}>
            <img src="../image/mg0iypnn-9vqhtst.svg" className={styles.pieejamBa} />
            <p className={styles.ilgums2}>Pieejamība</p>
            <p className={styles.visuGaduSezonLi}>visu gadu / sezonāli</p>
          </div>
        </div>
      </div>
      <div className={styles.rectangle193}>
        <p className={styles.button}>saņem bezmaksas programmu</p>
      </div>
    </div>
  );
}

export default Component;
