import { useMemo } from "react";
import styles from "./FormContainer2.module.css";

const FormContainer2 = ({
  featureTitle,
  featureDescription,
  supportText,
  budgetingCommunityAccessT,
  propZIndex,
}) => {
  const featureListStyle = useMemo(() => {
    return {
      zIndex: propZIndex,
    };
  }, [propZIndex]);

  return (
    <div className={styles.featureList} style={featureListStyle}>
      <div className={styles.feature}>
        <img
          className={styles.checkcircleIcon}
          alt=""
          src="/checkcircle--icon.svg"
        />
        <div className={styles.listItem}>{featureTitle}</div>
      </div>
      <div className={styles.feature}>
        <img
          className={styles.checkcircleIcon}
          alt=""
          src="/checkcircle--icon.svg"
        />
        <div className={styles.listItem}>{featureDescription}</div>
      </div>
      <div className={styles.feature}>
        <img
          className={styles.checkcircleIcon}
          alt=""
          src="/checkcircle--icon.svg"
        />
        <div className={styles.listItem}>{supportText}</div>
      </div>
      <div className={styles.feature}>
        <img
          className={styles.checkcircleIcon}
          alt=""
          src="/checkcircle--icon.svg"
        />
        <div className={styles.listItem}>{budgetingCommunityAccessT}</div>
      </div>
    </div>
  );
};

export default FormContainer2;
