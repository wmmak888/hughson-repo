import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  .topnav {
            background-color: #333;
            overflow: hidden;
          }
  .topnav-right {
                  float: right
                }
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
              <div class='topnav'>
                  <Link to='/'>Home</Link>
                        <div class='top-nav-right'>
                          <Link to='#hero'>About</Link>
                          <Link to='/project/'>Project</Link>
                          <Link to='/blog/'>Blog</Link>
                        </div>
               <div>
      </div>                                            
    </div>
  </div>
)

export default Header
