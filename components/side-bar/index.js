import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './index.css'

const SideBar = () => {
  return (
    <>
      <Menu>
        <a id="first" className="menu-item" href="/main">First React Page</a>
        <a id="second" className="menu-item" href="/second">Second React Page</a>
        <a id="third" className="menu-item" href="/third">Page with Vue Component</a>
      </Menu>
    </>
  )
}

export { SideBar }