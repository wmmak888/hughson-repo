import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
              <div style={{backgroundcolor:'#334CCB', overflow:'hidden' }} >
                  <Link to='/'>Home</Link>
                        <div style={{float:'right'}} >
                          <Link to='#hero'>About</Link>
                          <Link to='/project/'>Project</Link>
                          <Link to='/blog/'>Blog</Link>
                        </div>
               </div>
)

export default Header
