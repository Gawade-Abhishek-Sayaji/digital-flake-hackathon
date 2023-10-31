import React from 'react'
import TransLogo from "../Assets/Home/TransLogo.png"
import LogoutLogo from "../Assets/Home/LogoutLogo.png"
import home from "../Assets/Home/home.png"
import category from "../Assets/Home/categoru.png"
import products from "../Assets/Home/products.png"
import arrow from "../Assets/Home/Arrow.png"
import digitalflakelogo from "../Assets/Login/digitalflakeloginlogo.png"
import { Link } from 'react-router-dom'


export default function SideNavBar() {
  return (
    <div>
      <div style={{
      width: "1728px",
      height: "1117px",
      top: "-1699px",
      left: "-303px",
    }}> 
      
      <div>
        {/* Side Navbar  */}
          <div style={{position:"absolute",width:"448px",height:"1117px", backgroundColor:"#F4F4F4"}}>
            {/* Home tab (Further need to wrap in Link and routing to Home Page) */}
            <Link to="/home" >
            <div style={{position:"absolute",width:"439px",height:"59px", top:"159px", left:"4px", mixBlendMode:"multiply"}}>
              <div style={{position:"absolute",width:"30px",height:"30px", top:"13px", left:"26px"}}><img src={home}></img></div>
              <div style={{position:"absolute",width:"67px",height:"24px", top:"16px", left:"78px", fontFamily:"Inter", fontStyle:"normal", fontWeight:"400", fontSize:"24px", lineHeight:"24px", color:"#000000", alignContent:"center"}}>Home</div>
              <div style={{position:"absolute",width:"20px",height:"10px", top:"18px", left:"422px"}}><img src={arrow}></img></div>
            </div>
            </Link>
            {/* Category tab (Further need to wrap in Link and routing to Category Page)*/}
            <Link to="/category">
            <div style={{position:"absolute",width:"439px",height:"59px", top:"255px", left:"5px", mixBlendMode:"multiply"}}>
              <div style={{position:"absolute",width:"30px",height:"30px", top:"14px", left:"25px"}}><img src={category}></img></div>
              <div style={{position:"absolute",width:"106px",height:"24px", top:"17px", left:"76px", fontFamily:"Inter", fontStyle:"normal", fontWeight:"400", fontSize:"24px", lineHeight:"24px", color:"#000000", alignContent:"center"}}>Category</div>
              <div style={{position:"absolute",width:"20px",height:"10px", top:"19px", left:"421px"}}><img src={arrow}></img></div>
            </div>
            </Link>
            {/* Products tab (Further need to wrap in Link and routing to Products Page)*/}
            <Link to="/products">
            <div style={{position:"absolute",width:"439px",height:"59px", top:"345px", left:"5px", mixBlendMode:"multiply"}}>
              <div style={{position:"absolute",width:"30px",height:"30px", top:"16px", left:"25px"}}><img src={products}></img></div>
              <div style={{position:"absolute",width:"102px",height:"24px", top:"19px", left:"77px", fontFamily:"Inter", fontStyle:"normal", fontWeight:"400", fontSize:"24px", lineHeight:"24px", color:"#000000", alignContent:"center"}}>Products</div>
              <div style={{position:"absolute",width:"20px",height:"10px", top:"21px", left:"421px"}}><img src={arrow}></img></div>
            </div>
            </Link>
          </div>
          
        </div>
{/* Home Component */}
        <div>
          <div style={{position:"absolute", width:"341px", height:"179px", top:"361px", left:"875px"}}><img src={digitalflakelogo}/></div>
          <div style={{position:"absolute", width:"468px", height:"41px", top:"549px", left:"811px", fontFamily:"Inter", fontStyle:"normal", fontWeight:"400", fontSize:"32px", lineHeight:"38.73px", color:"#040404"}}>Welcome to Digitalflake Admin</div>
        </div>
        {/* Header */}
        <div style={{position:"absolute",width:"1728px",height:"118px", backgroundColor:"#662671", boxShadow:"0px 4px 5px 0px #0000001A"}}>
        <div style={{position:"absolute",width:"296px",height:"45.96px", top:"36px", left:"30px"}}><img src={TransLogo}></img></div>
        {/* Logout (Need to make a function on Button Click and redirecting to Login Page)*/}
        <div style={{position:"absolute",width:"50px",height:"50px", top:"31px", left:"1621px"}}><img src={LogoutLogo}></img></div>
        
      </div>
    </div>
    </div>
  )
}
