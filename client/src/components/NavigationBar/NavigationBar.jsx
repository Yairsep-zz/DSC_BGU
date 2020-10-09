import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import './NavigationBar.scss'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { isMobile } from '../../utils/utils'

const routes = [
  {
    title: 'Members',
    href: '/Members',
  },
  {
    title: 'Collabs',
    href: '/Collabs',
  },
  {
    title: 'Events',
    href: '/Events',
  },
  {
    title: 'Content',
    href: '/Content',
  },
  {
    title: 'Contact us',
    href: '/Contact',
  },
  {
    title: 'Apply',
    href: '/Apply',
  },
]

function NavigationBar() {
  const [elevation, setElevation] = useState(0)
  const [showNavBar, setShowNavBar] = useState(!isMobile())
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleScroll = () => {
    setElevation(document.getElementsByTagName('html')[0].scrollTop === 0 ? 2 : 5)
  }
  const resize = () => {
    setShowNavBar(!isMobile())
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', resize)
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', resize)
    }
  }, [])
  return (
    <AppBar position="sticky" className="appBar" elevation={elevation}>
      <div className="left">
        <Link to="/">
          <img src="/DSCwebLogo.png" className="logo" alt="logo" />
        </Link>
      </div>
      <div className="right">
        {
          showNavBar
            ? routes.map(({ href, title }) => (
              <NavLink key={href} to={href.toLocaleLowerCase().trim()} activeClassName="link-active" className="link">
                {title.toUpperCase()}
              </NavLink>
            ))
            : (
              <div>
                <IconButton onClick={handleClick}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {routes.map(({ href, title }) => (
                    <NavLink key={href} to={href} activeClassName="link-active" className="NavBarMenuItem">
                      <MenuItem onClick={handleClose}>
                        {title}
                      </MenuItem>
                    </NavLink>
                  ))}
                </Menu>
              </div>
            )
        }
      </div>
    </AppBar>
  )
}

export default NavigationBar
