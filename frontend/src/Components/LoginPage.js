import React from "react";
import background from "../Assets/Login/background.png";
import digitalflake from "../Assets/Login/digitalflakeloginlogo.png";

export default function LoginPage() {

  const submitForm=()=>{
    console.log("submit")
  }
  return (
    <div
      style={{
        width: "1728px",
        height: "1117px",
        top: "-1699px",
        left: "-2225px",
      }}
    >
      <img
        src={background}
        style={{ width: "1807px", height: "1203px", top: "-59px" }}
        alt=""
      />
      <form>
      <div
        style={{
          position: "absolute",
          width: "780px",
          height: "950px",
          top: "104px",
          left: "46px",
          borderRadius: "15px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 4px 15px 0px #000000BF",
        }}
      >
        <img
          src={digitalflake}
          style={{
            position: "absolute",
            width: "301px",
            height: "158px",
            top: "57px",
            left: "239px",
          }}
          alt=""
        />
        <div
          style={{
            position: "absolute",
            width: "492px",
            height: "48px",
            top: "215px",
            left: "134px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "32px",
            lineHeight: "48px",
            color: "#717070",
          }}
        >
          Welcome to Digitalflake Admin
        </div>
        <div  style={{position : "absolute",width : "673px",height : "85px",top : "354px",left : "49px",  }} >
        
        <div className="absolute top-[-8px] left-[0px] w-[673px] h-[92px]">
          <div className="absolute top-[8px] left-[0px] rounded-8xs bg-white box-border w-[673px] h-[84px] overflow-hidden border-[1px] border-solid border-darkgray">
            
            <input type="text" className="absolute top-[0px] left-[0px] w-[673px] h-[84px] text-4xl text-dimgray-200 font-p-posts" style={{fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "48px",
            color: "#717070",}}/>
            
          </div>
          <div className="absolute top-[0px] left-[12px] bg-white flex flex-row items-center justify-center py-0 px-1 text-8xl text-dimgray-200 font-poppins">
            <div className="relative tracking-[0.15px] leading-[16px]">
              Email ID
            </div>
          </div>
        </div>
        
        </div>

        <div  style={{position : "absolute",width : "673px",height : "85px",top : "519px",left : "49px",  }} >
        
        <div className="absolute top-[-8px] left-[0px] w-[673px] h-[92px]">
          <div className="absolute top-[8px] left-[0px] rounded-8xs bg-white box-border w-[673px] h-[84px] overflow-hidden border-[1px] border-solid border-darkgray">
            
            <input type="text" className="absolute top-[0px] left-[0px] w-[673px] h-[84px] text-4xl text-dimgray-200 font-p-posts" style={{fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "48px",
            color: "#717070",}}/>
            
          </div>
          <div className="absolute top-[0px] left-[12px] bg-white flex flex-row items-center justify-center py-0 px-1 text-8xl text-dimgray-200 font-poppins">
            <div className="relative tracking-[0.15px] leading-[16px]">
              Password
            </div>
          </div>
        </div>
        
        </div>

        <div style={{position:"absolute", width: "212px",height: "36px",top: "635px",left: "506px", fontFamily: "Poppins", fontStyle: "normal", fontWeight: "400", fontSize: "24px", lineHeight: "36px", color: "#A08CB1"}}>Forgot Password?</div>
        
        <button type="button" onClick={submitForm} style={{position:"absolute", width: "673px",height: "80px",top: "784px",left: "49px", borderRadius: "8px", backgroundColor:"#5C218B",boxShadow:"1px 1px 20px 0px #0000001C", fontFamily: "Poppins", fontStyle: "normal", fontWeight: "500", fontSize: "32px", lineHeight: "48px", color: "#FFFFFF"}}>Log In</button>
     
      </div>
      </form>
    </div>
  );
}