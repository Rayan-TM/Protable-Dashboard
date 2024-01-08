import React from 'react'
import { BarChart1, CheckCircle, Copy, Messages, ShopBag, User, UserPlus, Users } from './icons'
import { NavLink } from 'react-router-dom'
import DropdownItem from './DropdownItem'

export default function LargeSidebarMenu({menuItems}) {
  return (
    <ul className="sidebar-menu">
          <span className="menu-category">اصلی</span>
          <DropdownItem {...menuItems[0]}>
            <BarChart1 size={17} color="#BABABA" />
          </DropdownItem>
          <li className="sidebar-single-item">
            <Messages size={17} stroke="#BABABA" />
            <NavLink to="/chat">گفتگو</NavLink>
          </li>
          <li className="sidebar-single-item">
            <CheckCircle size={17} color="#BABABA" />
            <NavLink to="/todo">برای انجام</NavLink>
          </li>

          <span className="menu-category">دسترسی سریع</span>
          <li className="sidebar-single-item">
            <Users size={17} color="#BABABA" />
            <NavLink to="/contacts">مخاطبین</NavLink>
          </li>
          <li className="sidebar-single-item">
            <UserPlus size={17} color="#BABABA" />
            <NavLink to="/new_contact">مخاطب جدید</NavLink>
          </li>
          <li className="sidebar-single-item">
            <ShopBag size={17} color="#BABABA" />
            <NavLink to="/products">محصولات</NavLink>
          </li>

          <span className="menu-category">متفرقه</span>
          <DropdownItem {...menuItems[1]}>
            <User size={17} color="#BABABA" />
          </DropdownItem>
          <DropdownItem {...menuItems[2]}>
            <Copy size={17} color="#BABABA" />
          </DropdownItem>
        </ul>
  )
}
