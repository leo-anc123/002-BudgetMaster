import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import styles from "./FormCTA1.module.css";

const FormCTA1 = () => {
  return (
    <section className={styles.typesimpleCta}>
      <div className={styles.copyComponent}>
        <div className={styles.headingText}>
          <h1 className={styles.heading}>Stay in the loop</h1>
          <h3 className={styles.subheading}>
            Subscribe for budgeting tips and updates.
          </h3>
        </div>
        <div className={styles.buttoninputCombo}>
          <Form className={styles.input}>
            <Form.Label>Enter your email</Form.Label>
            <Form.Control type="text" />
          </Form>
          <Button className={styles.button} variant="primary">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FormCTA1;
