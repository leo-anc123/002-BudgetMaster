import Header from "../components/Header";
import ContainerHorizontalWelcomeToBu from "../components/ContainerHorizontalWelcomeToBu";
import FormContainer from "../components/FormContainer";
import BudgetTrackingForm from "../components/BudgetTrackingForm";
import PricingPlansCard1 from "../components/PricingPlansCard1";
import FormContainer1 from "../components/FormContainer1";
import FormCTA1 from "../components/FormCTA1";
import BudgetForm1 from "../components/BudgetForm1";
import styles from "./MushoMainFrame.module.css";

const MushoMainFrame = () => {
  return (
    <div className={styles.mushoMainFrame}>
      <Header />
      <ContainerHorizontalWelcomeToBu />
      <section className={styles.property1comprehensive}>
        <FormContainer />
        <BudgetTrackingForm />
      </section>
      <PricingPlansCard1 />
      <FormContainer1 />
      <FormCTA1 />
      <BudgetForm1 />
    </div>
  );
};

export default MushoMainFrame;
