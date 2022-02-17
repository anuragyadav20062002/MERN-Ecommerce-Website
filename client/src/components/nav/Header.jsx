/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { Menu } from "antd"
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons"

import { Link } from "react-router-dom"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

const { SubMenu, Item } = Menu

const Header = () => {
  const [current, setCurrent] = useState("home")
  let dispatch = useDispatch()
  let history = useHistory()

  const handleClick = (e) => {
    // console.log(e.key)
    setCurrent(e.key)
  }

  //logging out

  const logout = () => {
    firebase.auth().signOut()
    dispatch({
      type: "LOGGED_OUT",
      payload: null,
    })

    history.push("/")
  }

  return (
    <>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Item key="home" icon={<AppstoreOutlined />}>
          <Link to="/">Home</Link>
        </Item>
        <Item key="register" className="float-end" icon={<UserAddOutlined />}>
          <Link to="/register">Register</Link>
        </Item>
        <Item key="login" className="float-end" icon={<UserOutlined />}>
          <Link to="/login">Login</Link>
        </Item>

        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username">
          <Item key="setting:1">Option 1 </Item>
          <Item key="setting:2">Option 2</Item>
          <Item key="logout" icon={<UserOutlined />} onClick={logout}>
            Logout
          </Item>
        </SubMenu>
      </Menu>
    </>
  )
}

export default Header
