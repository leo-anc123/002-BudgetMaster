import styles from "./FormContainer1.module.css";
import 'bootstrap/dist/css/bootstrap.min.css'

const FormContainer1 = () => {
  return (
    <section className={styles.typemobileDownload}>
      <div className={styles.container}>
        <div className={styles.copyComponent}>
          <div className={styles.headingText}>
            <h1 className={styles.heading}>Ready to take control?</h1>
            <div className={styles.subheading}>
              Start managing your budget with BudgetMaster.
            </div>
          </div>
          <div className={styles.appDownloadCombo}>
            <img className={styles.appStoreIcon} alt="" src="/app-store.svg" />
            <img
              className={styles.googlePlayIcon}
              alt=""
              src="/google-play.svg"
            />
          </div>
        </div>
        <div className={styles.visualComp}>
          <img
            className={styles.backgroundImageAisplash}
            alt=""
            src="/background-image--aisplash@2x.png"
          />
          <img className={styles.deviceIcon} alt="" src="/device.svg" />
        </div>
      </div>
    </section>
  );
};

export default FormContainer1;
