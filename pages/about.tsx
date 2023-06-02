//create an about page component
import styles from '../styles/main.module.scss'


const About = (props) => {
    return (
      <div className={styles.content_container}  style={{marginTop: '65px', color: 'white'}}>
        <p>About Us</p>
            <p></p>
      </div>
    );
  }

export default About;
