import React from 'react'

const HomeContainer = () => {
    const [mdata , setmdata]=useState("home")
    const newmdata=(para)=>{
        setmdata(para);
    }
console.log(mdata);
  return (
    <div>HomeContainer</div>
  )
}

export default HomeContainer