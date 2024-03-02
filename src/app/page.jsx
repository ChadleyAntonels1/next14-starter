import styles from './home.module.css'
import Image from 'next/image';



const Home = () => {
  return <div className={styles.container}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Creative Thoughts agency</h1>
            <p className={styles.desc}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, s
               ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <div className={styles.buttons}>
              <button className={styles.button}>Learn more</button>
              <button className={styles.button}>Contact</button>
            </div>
            <div className={styles.brands}>
              <Image src="/brands.png" alt='' fill className={styles.brandImg}/>
            </div>
          </div>
          <div className={styles.imgContainer}>
          </div>
        </div>;
};

export default Home;