import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import FormContainer2 from "./FormContainer2";
import styles from "./PricingPlansCard1.module.css";

const PricingPlansCard1 = () => {
  return (
    <section className={styles.property1default}>
      <div className={styles.copyComponent}>
        <div className={styles.headingText}>
          <h1 className={styles.heading}>Pricing Plans</h1>
          <h3 className={styles.subheading}>
            Choose a plan that fits your needs.
          </h3>
        </div>
      </div>
      <div className={styles.pricePlans}>
        <div className={styles.plan}>
          <div className={styles.heading1}>
            <img className={styles.iconIcon} alt="" src="/icon--icon.svg" />
            <h1 className={styles.title}>Individual</h1>
            <div className={styles.shortDescription}>
              Ideal for personal budget management
            </div>
          </div>
          <div className={styles.price}>
            <b className={styles.b}>$5</b>
            <div className={styles.detailsContainer}>
              <div className={styles.perMonth}>per month</div>
              <div className={styles.yearlySwitch}>
                <div className={styles.perMonth}>yearly</div>
                <div className={styles.switch}>
                  <div className={styles.circle} />
                </div>
              </div>
            </div>
          </div>
          <FormContainer2
            featureTitle="Budget Analysis"
            featureDescription="Secure Data Storage"
            supportText="Email Support"
            budgetingCommunityAccessT="Budgeting Community Access"
          />
          <div className={styles.button}>
            <div className={styles.textContainer}>
              <div className={styles.cta}>Choose Individual</div>
            </div>
          </div>
        </div>
        <div className={styles.plan1}>
          <div className={styles.heading2}>
            <img className={styles.iconIcon} alt="" src="/icon--icon1.svg" />
            <h1 className={styles.title}>Family</h1>
            <div className={styles.shortDescription}>
              Perfect for managing family budgets
            </div>
          </div>
          <div className={styles.price1}>
            <div className={styles.price2}>
              <b className={styles.b1}>$10</b>
              <b className={styles.b2}>99</b>
            </div>
            <div className={styles.detailsContainer}>
              <div className={styles.perMonth}>per month</div>
              <div className={styles.yearlySwitch}>
                <div className={styles.perMonth}>yearly</div>
                <div className={styles.switch}>
                  <div className={styles.circle} />
                </div>
              </div>
            </div>
          </div>
          <FormContainer2
            featureTitle="Unlimited Budgets"
            featureDescription="Secure Family Data"
            supportText="24/7 Customer Support"
            budgetingCommunityAccessT="Custom Budget Categories"
            propZIndex="2"
          />
          <div className={styles.tag}>
            <div className={styles.bestDeal}>Best Value</div>
          </div>
          <Button className={styles.button1} variant="primary">
            Choose Family
          </Button>
        </div>
        <div className={styles.plan}>
          <div className={styles.heading1}>
            <img className={styles.iconIcon} alt="" src="/icon1.svg" />
            <h1 className={styles.title}>Business</h1>
            <div className={styles.shortDescription}>
              Ideal for small businesses
            </div>
          </div>
          <div className={styles.price}>
            <b className={styles.b1}>$15</b>
            <div className={styles.detailsContainer2}>
              <div className={styles.perMonth}>per month</div>
              <div className={styles.yearlySwitch}>
                <div className={styles.perMonth}>yearly</div>
                <div className={styles.switch}>
                  <div className={styles.circle} />
                </div>
              </div>
            </div>
          </div>
          <FormContainer2
            featureTitle="Multiple Users"
            featureDescription="Secure Business Data"
            supportText="Priority Support"
            budgetingCommunityAccessT="Business Community Access"
            propZIndex="unset"
          />
          <div className={styles.button}>
            <div className={styles.textContainer1}>
              <div className={styles.cta}>Choose Business</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlansCard1;
