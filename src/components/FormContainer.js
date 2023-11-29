import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./FormContainer.module.css";

const FormContainer = () => {
  return (
    <div className={styles.headingWrapper}>
      <div className={styles.headingContainer}>
        <div className={styles.copyComponent}>
          <div className={styles.headingText}>
            <h1 className={styles.howItWorks}>How BudgetMaster Works</h1>
            <div className={styles.howItWorks1}>
              A quick guide to managing your budget.
            </div>
          </div>
          <Button variant="primary">Learn More</Button>
        </div>
        <img className={styles.imageDalle} alt="" src="/image--dalle@2x.png" />
      </div>
    </div>
  );
};

export default FormContainer;
