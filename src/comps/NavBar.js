import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink, useLocation } from 'react-router-dom'



const NavBar = () => {
  let {pathname} = useLocation()
  let active = pathname === '/'
  console.log({ location, active})
  return (<Menu>
    <Menu.Item
      as={NavLink} exact to="/"
      name='home'
    />
  </Menu>)
}

export default NavBar

