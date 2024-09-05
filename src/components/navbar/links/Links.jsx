'use client';
import React, { useState, useEffect } from 'react'
import styles from './links.module.css'
import Image from 'next/image';
import NavLink from './navLinks/navLink'
import { handleLogout } from '@/lib/action';

    const links =
    [
        {
            title : "Homepage",
            path : "/",
        },
        // {
        //     title : "About",
        //     path : "/about",
        // },
        // {
        //     title : "Contact",
        //     path : "/contact",
        // },
        {
            title : "Blog",
            path : "/blog",
        },
    ];

    const Links = ({session}) => {
    const [open,setOpen] = useState(false);

    useEffect(() => {
      if (!open){
        document.getElementById("nav")
      }
        },[open]);

    

    //temp
    // const session = true;
    // const isAdmin = true;


    return (
        <div className={styles.container}>
          <div className={styles.links}>
            {links.map((link) => (
              <NavLink item={link} key={link.title} />
            ))}
            {session?.user ? 
            
            (
              <>
                {session.user?.id && <NavLink item={{ title: "Profile", path: "/profile"}} />}
                
             
                {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin"}} />}
                <form action={handleLogout}>
                  <button className={styles.logout}>Logout</button>
                </form>
              </>
              
            ) : (
              <NavLink item={{ title: "Login", path: "/login" }} />
            )}
          </div>


          <Image
            className={styles.menuButton}
            src="/menu.png"
            alt=""
            width={30}
            height={30}
            onClick={(()=>setOpen((!open)))}
            id='nav'          />

          {open && (
            <div  id='nav' className={styles.mobileLinks}>
              {links.map((link) => (
                <NavLink  onClick={()=> setOpen(false)}
                                   href={link.path} 
                                   item={link} 
                                   key={link.title}
                                   htmlFor="nav" />
              ))}
              {session?.user ? (
              <>
                {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                <form action={handleLogout}>
                  <button className={styles.logout}>Logout</button>
                </form>
              </>
            ) : (
              <NavLink item={{ title: "Login", path: "/login" }} />
            )}
            </div>
          )}
        </div>
      );
    };


export default Links;