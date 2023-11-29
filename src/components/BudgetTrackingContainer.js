import styles from "./BudgetTrackingContainer.module.css";

const BudgetTrackingContainer = ({
  iconImageUrl,
  featureDescription,
  featureTitle,
}) => {
  return (
    <div className={styles.step}>
      <img className={styles.iconIcon} alt="" src={iconImageUrl} />
      <div className={styles.featureTitle}>{featureDescription}</div>
      <div className={styles.stepDescription}>{featureTitle}</div>
    </div>
  );
};

export default BudgetTrackingContainer;
