import React from 'react'
// import "./style-menu.css"


const Navbar = ({filter,menu,menuData}) => {
// console.log(menu)
  return (
    <>
        <nav className="navbar">
     <div className="btn-group">
   {
    menu.map((crEle)=>{
      return(
        <button className="btn-group__item"onClick={()=>{filter(crEle)}} >
         {crEle}
       </button>
      )
    })
   }
       {/* <button className="btn-group__item" onClick={()=>{setMenuData(Menu)}}>
         All
       </button> */}
     </div>
    </nav>
    </>
  )
}

export default Navbar