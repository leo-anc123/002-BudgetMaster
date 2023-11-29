import styles from "./BudgetForm1.module.css";

const BudgetForm1 = () => {
  return (
    <section className={styles.typemegaMenuDivider}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.brand}>
            <img className={styles.icon} alt="" src="/icon2.svg" />
            <div className={styles.brandname}>BudgetMaster</div>
          </div>
          <div className={styles.slogan}>Master Your Budget</div>
        </div>
        <div className={styles.links}>
          <div className={styles.list}>
            <div className={styles.listHeading}>Company</div>
            <div className={styles.listLinkItem}>About Us</div>
            <div className={styles.listLinkItem}>Join Our Team</div>
            <div className={styles.listLinkItem}>Latest Updates</div>
          </div>
          <div className={styles.list}>
            <div className={styles.listHeading}>Features</div>
            <div className={styles.listLinkItem}>Tracking</div>
            <div className={styles.listLinkItem}>Goals</div>
            <div className={styles.listLinkItem}>Analysis</div>
          </div>
          <div className={styles.list}>
            <div className={styles.listHeading}>Connect</div>
            <div className={styles.listLinkItem}>Twitter</div>
            <div className={styles.listLinkItem}>Instagram</div>
            <div className={styles.listLinkItem}>LinkedIn</div>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.legals}>
        <div className={styles.copyright}>All rights reserved 2024</div>
        <div className={styles.list3}>
          <div className={styles.listLinkItem}>Terms of Service</div>
          <div className={styles.listLinkItem}>Privacy Policy</div>
        </div>
      </div>
    </section>
  );
};

export default BudgetForm1;
