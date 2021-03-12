import React from 'react'
import { FooterNavBar } from './FooterNavBar'
import s from './Footer.module.css'

export const Footer = () => {
    return <footer>
        <FooterNavBar />
        <div className={s.headerText}>
            IMPERIA SITE FOOTER
        </div>
    </footer>
}