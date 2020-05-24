import * as React from "react";

import { TestComponentProps } from "./testComponent.types";

import styles from "./testComponent.module.scss";

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => {

    React.useEffect(() => {
        console.log(JSON.stringify(styles));
    })
    return (
    <div
        className={`${styles.testComponent} ${theme === "secondary" ? styles.testComponentSecondary : ''}`}
    >
        <h1 className={styles.heading}>I'm the test component</h1>
        <h2>lorem ipsum and so on</h2>
    </div>)
};

export default TestComponent;