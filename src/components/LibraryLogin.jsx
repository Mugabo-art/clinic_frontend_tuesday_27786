import React, { useState } from 'react'
import LibraryButton from './LibraryButton'

function LibraryLogin() {

   const [doYouHaveAnAccount, setDoYouHaveAnAccount] = useState(true);

   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");

   function navigateBetweenCreateAccountAndLogin() {
     setDoYouHaveAnAccount(!doYouHaveAnAccount);
   }

   function LoginAction(){
    alert("This is your username:"+ userName + " and this is your password: "+ password );
   }

   const boxClass = "w-[400px] mx-auto my-[40px] p-[30px] text-[20px] text-left";
   const fieldClass = "mb-[15px]";
   const labelClass = "block mb-[5px]";
   const inputClass = "text-[18px] p-[8px] w-full box-border";
   const footerClass = "mt-[25px] text-center";

  return (
    <>
    { doYouHaveAnAccount ? (
        <div className={boxClass + " border-[3px] border-solid border-[blue]"}>
            <h2 className="text-center">LOGIN</h2>

            <div className={fieldClass}>
                <label className={labelClass}>Username:</label>
                <input className={inputClass} type="text" onChange={e=> setUserName(e.target.value)} placeholder='Enter your username'/>
            </div>

            <div className={fieldClass}>
                <label className={labelClass}>Password:</label>
                <input className={inputClass} type="password" onChange={e=> setPassword(e.target.value)} placeholder='Enter your password'/>
            </div>

            <div className="text-center">
                <LibraryButton buttonLabel="LOGIN" onClickButton={LoginAction}/>
            </div>

            <div className={footerClass}>
                <label>New here?</label>
                <LibraryButton buttonLabel="Create Account" onClickButton={navigateBetweenCreateAccountAndLogin}/>
            </div>
        </div>
    ):(
        <div className={boxClass + " border-[3px] border-solid border-[indigo]"}>
            <h2 className="text-center">CREATE ACCOUNT</h2>

            <div className={fieldClass}>
                <label className={labelClass}>Student ID:</label>
                <input className={inputClass} type="text" placeholder='Enter your student ID'/>
            </div>

            <div className={fieldClass}>
                <label className={labelClass}>Email:</label>
                <input className={inputClass} type="email" placeholder='Enter your email'/>
            </div>

            <div className={fieldClass}>
                <label className={labelClass}>Password:</label>
                <input className={inputClass} type="password" placeholder='Enter your password'/>
            </div>

            <div className={fieldClass}>
                <label className={labelClass}>Confirm Password:</label>
                <input className={inputClass} type="password" placeholder='Confirm your password'/>
            </div>

            <div className="text-center">
                <LibraryButton buttonLabel="CREATE ACCOUNT"/>
            </div>

            <div className={footerClass}>
                <label>Already have an account?</label>
                <LibraryButton buttonLabel="Sign In" onClickButton={navigateBetweenCreateAccountAndLogin}/>
            </div>
        </div>
    )
    }
    </>
  )
}

export default LibraryLogin
