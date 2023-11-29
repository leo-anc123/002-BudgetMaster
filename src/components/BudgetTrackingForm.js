import BudgetTrackingContainer from "./BudgetTrackingContainer";
import styles from "./BudgetTrackingForm.module.css";

const BudgetTrackingForm = () => {
  return (
    <div className={styles.stepsWrapper}>
      <div className={styles.howItWorksGrid}>
        <BudgetTrackingContainer
          iconImageUrl="/icon-icon.svg"
          featureDescription="Budget Tracking"
          featureTitle="Monitor your spending habits easily."
        />
        <BudgetTrackingContainer
          iconImageUrl="/icon-icon1.svg"
          featureDescription="Goal Setting"
          featureTitle="Set and achieve financial goals."
        />
        <BudgetTrackingContainer
          iconImageUrl="/icon-icon2.svg"
          featureDescription="Expense Analysis"
          featureTitle="Understand where your money goes."
        />
        <BudgetTrackingContainer
          iconImageUrl="/icon-icon3.svg"
          featureDescription="Family Sharing"
          featureTitle="Manage your family's budget together."
        />
      </div>
    </div>
  );
};

export default BudgetTrackingForm;
