import React from 'react'
import Image from 'next/image'
import styles from './about2.module.css'

export const metadata = {
    title:" About Page" ,
    description:"This is the about page of Chadley Antonels porfolio",
  
}

const AboutPage = () => {
  return (
    
    <div>
            <div className='grid gap-8 md:grid-col'>
                <div className=''>

                      <h1 className='text-3xl '>Chadley Antonels</h1>
                      <h2 className='text-xl'>Frontend Web Developer</h2>
                </div>
            </div>
            <div className="grid gap-8 md:grid-col-2">
                <div className="flex flex-col md:flex-col " >
                  <img src="/IMG_6020.jpg" 
                        alt="Profile" 
                        className="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0" />
                </div>
                    <h2 className="text-3xl font-semibold mb-4">About Me</h2>
                    <p className="md:ml-10 md:w-2/3">
                      As an entry-level frontend web developer, I'm a driven creator with a passion for turning code into visually appealing interfaces. 
                      I adapt easily to changes, using effective communication and creative problem-solving to navigate the intricacies of pixels and code. Punctuality, composure, and patience are crucial in crafting user-friendly designs. 
                      Whether leading a project or collaborating in a team, I bring an approachable persona, taking pride in every detail for a user's smooth digital journey. Guided by values like loyalty and honesty, I see myself not just as a developer but a storyteller, creating digital experiences that resonate. 
                      In frontend development, success is a journey where hard work and perseverance set the course.
                    </p>
                </div>
            
      
      {/* <div class='' className={styles.container}>
          <div className={styles.textContainer}>
                <h1 class='' className={styles.title}>Chadley Antonels</h1>
                <h2 className={styles.subtitle}>Frontend Web Developer</h2>
          </div>
      </div>

      <div className={styles.container}>
          <div className={styles.imgContainer}>
            <Image
              src="/IMG_6020.jpg"
              alt="About Image"
              fill
              className={styles.img}/>
          </div>
          
          <div className={styles.textContainer}>
            <h2 className={styles.subtitle1}>Background</h2>
              <p className={styles.desc1}>
                As an entry-level frontend web developer, I'm a driven creator with a passion for turning code into visually appealing interfaces. 
                I adapt easily to changes, using effective communication and creative problem-solving to navigate the intricacies of pixels and code. Punctuality, composure, and patience are crucial in crafting user-friendly designs. 
                Whether leading a project or collaborating in a team, I bring an approachable persona, taking pride in every detail for a user's smooth digital journey. Guided by values like loyalty and honesty, I see myself not just as a developer but a storyteller, creating digital experiences that resonate. 
                In frontend development, success is a journey where hard work and perseverance set the course.
              </p>          
          </div>        
      </div>

      <div className={styles.container2}>
          <h2 className={styles.subtitle2}>Education</h2>
      </div>

      <div className={styles.container1}>
        <div className={styles.textContainer1}>
          <h3 className={styles.subdesc}>National Senior Certificate</h3> 
        </div>
        <div className={styles.textContainer1}>
          <h3 className={styles.subdesc}>Higher Certificate: Information and Communication Technology</h3>  
        </div>
          <div className={styles.textContainer1}>
          <h3 className={styles.subdesc}>Diploma : Information and Communication Technology- Multimedia Applications</h3>  
        </div>
      </div>

      <div className={styles.container1}>
        <div className={styles.textContainer1}>
          <p className={styles.desc2}>South Peninsula High School</p> 
        </div>
        <div className={styles.textContainer1}>
        <p className={styles.desc2}>Cape Peninsula University of Technology</p> 
        </div>
          <div className={styles.textContainer1}>
          <p className={styles.desc2}>Cape Peninsula University of Technology</p>  
        </div>
      </div>

      <div className={styles.container1}>
        <div className={styles.textContainer1}>
          <p className={styles.desc2}>2012-2017</p>         
        </div>
        <div className={styles.textContainer1}>
        <p className={styles.desc2}>2018-2018</p>  
        </div>
          <div className={styles.textContainer1}>
          <p className={styles.desc2}>2019-2023</p>  
        </div>
      </div>

      <div className={styles.container1}>
          <div className={styles.textContainer1}>
              <li className={styles.desc2}>Bachalors pass</li>               
          </div>             
          <div className={styles.textContainer1}>
              <li className={styles.desc2}>Graduated with four distinctions</li> 
          </div>      
          <div className={styles.textContainer1}>              
              <li className={styles.desc2}>frontend web development</li>  
          </div>
      </div>

                

      <div className={styles.container}>   
          <div className={styles.textContainer1}>
            <h2 className={styles.subtitle2}>Background</h2>
              <p className={styles.desc1}>
                As an entry-level frontend web developer, I'm a driven creator with a passion for turning code into visually appealing interfaces. 
                I adapt easily to changes, using effective communication and creative problem-solving to navigate the intricacies of pixels and code. Punctuality, composure, and patience are crucial in crafting user-friendly designs. 
                Whether leading a project or collaborating in a team, I bring an approachable persona, taking pride in every detail for a user's smooth digital journey. Guided by values like loyalty and honesty, I see myself not just as a developer but a storyteller, creating digital experiences that resonate. 
                In frontend development, success is a journey where hard work and perseverance set the course.
              </p>          
          </div>       
               
      </div> */}


      

    </div>
  )
}

export default AboutPage;