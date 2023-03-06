import styles from "./StepsIndex.module.scss";

function StepsIndex({ step }) {
  return (
    <ul className={styles.stepsindex}>
      <li>
        <div
          style={
            step === 0
              ? { background: "var(--secondary-color)" }
              : { background: "var(--primary-color)" }
          }
        >
          1
        </div>
      </li>
      <li>
        <div
          style={
            step === 1
              ? { background: "var(--secondary-color)" }
              : { background: "var(--primary-color)" }
          }
        >
          2
        </div>
      </li>
      <li>
        <div
          style={
            step === 2
              ? { background: "var(--secondary-color)" }
              : { background: "var(--primary-color)" }
          }
        >
          3
        </div>
      </li>
    </ul>
  );
}

export default StepsIndex;
