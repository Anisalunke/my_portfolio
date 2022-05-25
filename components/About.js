import styles from '../styles/About.module.css'


const About = () => {
    return ( 

        <>
        <div className={styles.about}>
            <img src="./myself.JPG" className={styles.img}/>
            <div className={styles.menu}>
                <div className={styles.close_button}></div>
                <div className={styles.minimize_button}></div>
                <div className={styles.buffer_button}></div>
            </div>
            <div className={styles.screen}>
                <p className={styles.line1}>Hallo this is Aniruddha Salunke. <span className={styles.cursor1}>_</span></p>
                <p className={styles.line2}>I'm a web developer. <span className={styles.cursor2}></span></p>
                <p className={styles.line3}>Fan of linux. <span className={styles.cursor3}></span></p>
                <p className={styles.lin4}><span className={styles.cursor4}>_</span></p>
            </div>
          
            
          
            
        </div>
        </>
     );
}
 
export default About;