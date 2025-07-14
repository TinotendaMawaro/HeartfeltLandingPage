import { FunctionComponent } from 'react';
import styles from './HeaderBottomText.module.css';

const HeaderBottomText: FunctionComponent = () => {
  return (
    <div className={styles.headerBottomText}>
      <div className={styles.slogan}>
        <p className={styles.transformingLivesBuildingL}>
          <span>{`Transforming Lives, Building Legacies, Igniting `}</span>
          <span className={styles.destinies}>Destinies</span>
          <span className={styles.span}>.</span>
        </p>
      </div>
      <div className={styles.line} />
    </div>
  );
};

export default HeaderBottomText;
