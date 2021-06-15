import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
     <div className={styles.wrapper}>
         <div className={styles.branding>}
                        <div style={{background:'#334CCB',float:'right'}} >
                          <Link to='/'>About</Link>
                          <Link to='/project/'>Project</Link>
                          <Link to='/blog/'>Blog</Link>
                        </div>
         </div>
     </div>
  </div>
)

export default Header
