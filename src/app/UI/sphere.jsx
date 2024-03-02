"use client"
import Spline from '@splinetool/react-spline';
import styles from './sphere.module.css'

const Sphere = () =>{
  return (
    <div className={styles.sphere}>
      <Spline scene="https://prod.spline.design/RGzEE4Y6-Sgn7HSJ/scene.splinecode" />
    </div>
  );
}

export default Sphere