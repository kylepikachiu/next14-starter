"use client"
import React from 'react'
import styles from './navLink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const NavLink = ({item}) => {
    // * the path in the url. next fn
    const pathName = usePathname();
  return (
    <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>
        {item.title}
    </Link>
  )
}

export default NavLink
