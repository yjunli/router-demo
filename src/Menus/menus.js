import React from 'react'
// 引入NavLink 组件
import { NavLink } from "react-router-dom";
import './menus.css'

// 高亮的样式，表示我们在哪个导航下
const selectedStyle = {
  backgroundColor: 'white',
  color: 'slategray'
}

// navLink， activeStyle 点击高亮显示当前标签。
export const MainMenu = () => (
  <nav className='main-menu'>
    <NavLink replace to='/'>首页</NavLink>
    <NavLink replace to='/about' activeStyle = {selectedStyle}>关于我们</NavLink>
    <NavLink replace to='/events' activeStyle = {selectedStyle}>企业事件</NavLink>
    <NavLink replace to='/products' activeStyle = {selectedStyle}>公司产品</NavLink>
    <NavLink replace to='/contact' activeStyle = {selectedStyle}>联系我们</NavLink>
    <NavLink replace to='/log' activeStyle = {selectedStyle}>登录</NavLink>
  </nav>
)

export const AboutMenu = () => (
  <ul className="about-menu">
    <li>
      <NavLink replace to='/about' exact activeStyle ={selectedStyle}>公司简介</NavLink>
    </li>
    <li>
      <NavLink replace to='/about/history' activeStyle ={selectedStyle}>公司历史</NavLink>
    </li>
    <li>
      <NavLink replace to='/about/services' activeStyle ={selectedStyle}>公司服务</NavLink>
    </li>
    <li>
      <NavLink replace to='/about/location' activeStyle ={selectedStyle}>企业位置</NavLink>
    </li>
  </ul>
)