import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./ContainerHorizontalWelcomeToBu.module.css";

const ContainerHorizontalWelcomeToBu = () => {
  return (
    <section className={styles.typehorizontal}>
      <div className={styles.wrapper}>
        <div className={styles.copyComponent}>
          <div className={styles.headingText}>
            <h1 className={styles.heading}>Welcome to BudgetMaster</h1>
            <h3 className={styles.subheading}>
              Your personal budgeting companion.
            </h3>
          </div>
          <Button className={styles.ctaButton} variant="primary">
            Get Started
          </Button>
        </div>
        <img
          className={styles.imageContainerIcon}
          alt=""
          src="/image-container@2x.png"
        />
      </div>
    </section>
  );
};

export default ContainerHorizontalWelcomeToBu;
