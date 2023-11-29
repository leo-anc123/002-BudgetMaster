import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.typebubble}>
      <div className={styles.bubbleContainer}>
        <nav className={styles.navLinks}>
          <div className={styles.navLink}>
            <div className={styles.navLabel}>Overview</div>
          </div>
          <div className={styles.navLink}>
            <div className={styles.navLabel}>Features</div>
          </div>
          <div className={styles.navLink}>
            <div className={styles.navLabel}>Team</div>
          </div>
        </nav>
        <div className={styles.navLinks1}>
          <div className={styles.navLink}>
            <div className={styles.navLabel}>About</div>
          </div>
          <div className={styles.navLink}>
            <div className={styles.navLabel}>Blog</div>
          </div>
          <div className={styles.navLink}>
            <div className={styles.navLabel}>Support</div>
          </div>
        </div>
        <div className={styles.brand}>
          <img className={styles.icon} alt="" src="/icon.svg" />
          <div className={styles.brandname}>BudgetMaster</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
