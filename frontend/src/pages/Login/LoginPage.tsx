import Bg from "../../assets/login/loginbg.png"
import LoginEmail from "../../components/Login/LoginEmail"
import LoginNumber from "../../components/Login/LoginNumber"
import LoginOtp from "../../components/Login/LoginOtp"
import { useState } from "react";

const LoginPage = () => {

    const [showComponent, setShowComponent] = useState('LoginEmail');
    const [mobileNumber, setMobileNumber] = useState('');
  
    const handleSwitchToOtp = (number) => {
      setMobileNumber(number);
      setShowComponent('LoginOtp');
    };
  
    const handleLoginWithNumber = () => {
      setShowComponent('LoginNumber');
    };
  
    return(
        <div className="relative flex items-center justify-center">
            <img className="object-cover w-[100vw] h-[100vh] z-5" src={Bg} alt="Background image" />

            <div className="absolute flex items-center z-10 justify-center">
            {showComponent === 'LoginEmail' && (
               <LoginEmail onLoginWithNumber={handleLoginWithNumber} />
             )}
             {showComponent === 'LoginNumber' && (
               <LoginNumber onSwitchToOtp={handleSwitchToOtp} />
             )}
             {showComponent === 'LoginOtp' && (
               <LoginOtp mobileNumber={mobileNumber} />
             )}
            </div>
        </div>
    )
}

export default LoginPage