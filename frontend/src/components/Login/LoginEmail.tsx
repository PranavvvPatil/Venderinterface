import Eye from "../../assets/login/quill_eye.png";
import Mobile from "../../assets/login/mobile.png";
import Google from "../../assets/login/google.png";
import Apple from "../../assets/login/apple.png";
import { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import AppleSignin from "react-apple-signin-auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LoginEmail = ({onLoginWithNumber}) => {
;

    const [formData, setFormData] = useState({ email: "", password: "", agreedToTerms: false });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prevVisibility) => !prevVisibility);
    };

    const handleLogin = async () => {
        if (!formData.agreedToTerms) {
            alert("Please agree to the Terms & Conditions before logging in.");
            return;
        }

        try {
         const response = await axios.post("http://localhost:3000/api/auth/login", {
           email: formData.email,
           password: formData.password,
         },
         { withCredentials: true }
         );
     
         alert(response.data.message);
         console.log("Token:", response.data.token);
     
         setFormData({ email: "", password: "", agreedToTerms: false });

         navigate("/");
       } catch (error) {
         console.error(error);
         alert(error.response?.data?.error || "Login failed");
       }
    };


    const handleGoogleSuccess = async (credentialResponse) => {
      console.log("Google Login Success:", credentialResponse.profileObj);
      const token = credentialResponse.credential;

      try {
        const response = await axios.post("http://localhost:3000/api/auth/google", { token });
        console.log("Google Auth Success:", response.data);
      } catch (error) {
        console.error("Google Auth Failed:", error.response.data.error);
      }
    };
  
    const handleGoogleFailure = (error) => {
      console.error("Google Login Failed:", error);
    };
  
    const handleAppleSuccess = (response) => {
      console.log("Apple Login Success:", response);
      // TODO: Handle successful Apple login (e.g., send token to your server)
    };
  
    const handleAppleFailure = (error) => {
      console.error("Apple Login Failed:", error);
    };
  

/*    <div className="self-stretch h-[3.625rem] px-[5.375rem] py-[1.438rem] rounded-[1.563rem] shadow border border-[#cdcdcd] flex-col justify-center items-center gap-2.5 flex">
    <div className="w-[19.563rem] justify-center items-center gap-[1.438rem] inline-flex">
       <div onClick={onLoginWithNumber} className="justify-center items-center gap-[1.875rem] cursor-pointer flex">
          <img src={Mobile} className="w-9 h-9  relative origin-top-left " />
          <div className="text-black text-lg font-bold font-Poppins ">Log In with Mobile Number </div>
       </div>
    </div>
 </div> w-[37.5rem] h-[49.5rem] pl-12 pr-[3.063rem] pt-[3.125rem] pb-[3.438rem]*/

    return(
        <div>

           <div className=" w-[28rem] h-[40.875rem] p-8 bg-white rounded-lg shadow-lg border border-[#f2f4f1] flex-col justify-start items-center inline-flex">
              <div className="self-stretch h-[36.875rem] flex-col justify-start items-center gap-[3.125rem] inline-flex">
                 <div className="h-[4.875rem] flex-col justify-center items-center gap-[1.375rem] flex">
                    <h1 className="self-stretch text-center text-black text-3xl font-normal font-['Pacifico'] leading-normal tracking-wide">Welcome Back</h1>
                    <h3 className="w-[15.438rem] text-[#8b8b8b] text-lg font-normal font-['Pacifico'] ">Plants are the earth's lungs</h3>
                 </div>
                 <div className="self-stretch w-[24rem] h-[36.875rem] flex-col justify-between items-start flex">
                    <div className="self-stretch h-[13.875rem] flex-col justify-start items-start gap-[1.875rem] flex">
                       <div className="self-stretch w-[24rem] h-[4.313rem] flex-col justify-start items-start gap-2.5 flex">
                          <label className="self-stretch text-black text-base font-medium font-Poppins leading-normal tracking-wide">Email</label>
                          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example123@gmail.com" required className="w-[24rem] pl-2 pt-[0.813rem] pb-px border-b border-[#cdcdcd] justify-start items-center inline-flex text-[#8b8b8b] text-sm font-normal font-Poppins focus:outline-none " />
                       </div>
                       <div className="self-stretch w-[24rem] h-[4.313rem] flex-col justify-start items-start gap-2.5 flex">
                          <label className="self-stretch text-black text-base font-medium font-Poppins leading-normal tracking-wide">Password</label>
                          <div className="h-[2.188rem] border-b border-[#cdcdcd] justify-start items-center inline-flex">
                             <div className="w-[24rem] self-stretch justify-between items-center inline-flex">
                                <input type={isPasswordVisible? "text" : "password" } name="password" value={formData.password} onChange={handleChange} placeholder="Enter Your Password" required className="text-[#8b8b8b] pl-2 text-sm font-normal font-Poppins outline-none focus:outline-none focus:ring-0 " />
                                <div className="w-6 h-6 relative cursor-pointer">
                                   <img src={Eye} onClick={togglePasswordVisibility} className="w-[1.219rem] h-[1.219rem] left-[0.141rem] top-[0.328rem] absolute" />
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="justify-start items-center gap-2 inline-flex">
                          <input type="checkbox" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleChange} className="w-[1.063rem] h-[0.938rem] relative rounded border border-black" />
                          <div className="justify-start items-center gap-2 flex">
                             <span className="text-[#8b8b8b] text-base font-medium font-Poppins leading-normal tracking-wide">I agree to the</span>
                             <span className="border-b border-[#333333] justify-center items-center flex text-[#6369ff] text-lg font-semibold font-Poppins ">Terms & conditions</span>
                          </div>
                       </div>
                    </div>
                    <div className="self-stretch flex-col justify-center items-center flex">
                       <button onClick={handleLogin} className="self-stretch px-[9.75rem] py-[0.5rem] bg-[#7aa262] rounded-[1.563rem] shadow justify-center items-center gap-2.5 inline-flex text-white text-lg font-bold font-Poppins leading-normal tracking-wide">Log In</button>
                    </div>
                 </div>
                 <div className="justify-start items-start gap-[3.125rem] inline-flex">
                    <img src={Google} className="w-6 h-6 relative cursor-pointer" />
                    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
                       <GoogleLogin
                         onSuccess={handleGoogleSuccess}
                         onError={handleGoogleFailure}
                       />
                    </GoogleOAuthProvider>
                    <img src={Apple} className="w-6 h-6 relative cursor-pointer" />
                 </div>
                 <div className="justify-start items-center gap-[0.938rem] inline-flex">
                    <h4 className="text-[#8b8b8b] text-sm font-normal font-Poppins ">Don’t have an account ? </h4>
                    <h4 onClick={()=>navigate('/signup')} className="text-black text-base font-medium font-Poppins leading-normal tracking-wide cursor-pointer">Sign Up</h4>
                 </div>
              </div>
           </div>

        </div>
    )
}

export default LoginEmail