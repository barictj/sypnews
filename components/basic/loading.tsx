import styles from './loading.module.scss'

const LoadingComponent = (props) => {
    return (
        <div className={styles.loader_div}>
<span className={styles.loader}></span>
    </div>
    );
};

export default LoadingComponent;
