import React, {useState} from 'react'
import "./style-menu.css"
import MenuCard from "../Home/Deals/MenuCard"
import Menu from "./Pizzamenu"


const Pizza = () => {
   const [menuData,setMenuData]=useState(Menu);
  
  return (
    <>
    <MenuCard menuData={menuData}/>
    </>
  )
}

export default Pizza
