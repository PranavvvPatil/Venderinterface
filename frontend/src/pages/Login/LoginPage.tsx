import Bg from "../../assets/login/loginbg.png"
import LoginEmail from "../../components/Login/LoginEmail"
import LoginNumber from "../../components/Login/LoginNumber"
import LoginOtp from "../../components/Login/LoginOtp"
import { useState } from "react";

const LoginPage = () => {

    const [showComponent, setShowComponent] = useState('LoginEmail');
    const [mobileNumber, setMobileNumber] = useState('');
    const [popupMessage, setPopupMessage] = useState<string | null>(null);

    const showPopup = (message: string) => {
      setPopupMessage(message);
      setTimeout(() => setPopupMessage(null), 3000);
    };
  
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
               <LoginEmail showPopup={showPopup} onLoginWithNumber={handleLoginWithNumber} />
             )}
             {showComponent === 'LoginNumber' && (
               <LoginNumber onSwitchToOtp={handleSwitchToOtp} />
             )}
             {showComponent === 'LoginOtp' && (
               <LoginOtp mobileNumber={mobileNumber} />
             )}
            </div>

            {popupMessage && (
              <div className="fixed flex items-center z-20 justify-center top-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300">
                {popupMessage}
              </div>
            )}

        </div>
    )
}

export default LoginPage