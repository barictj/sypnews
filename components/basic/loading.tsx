import styles from './loading.module.scss'

const LoadingComponent = (props) => {
    return (
        <div className={styles.loading_container}>
            L<img src="../images/download.png" className={styles.loading_image} style={{ width: '50px', height: '50px' }} />ading
        </div>

    );
};

export default LoadingComponent;
