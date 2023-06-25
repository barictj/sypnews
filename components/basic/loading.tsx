import styles from './loading.module.scss'

const LoadingComponent = (props) => {
    return (
        <div className={styles.loading_container}>
            <img src="../images/download.png" className={styles.loading_image} style={{ width: '40px', height: '40px' }} />
        </div>

    );
};

export default LoadingComponent;
