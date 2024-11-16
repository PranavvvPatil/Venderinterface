import Eye from "../../assets/login/quill_eye.png";
import Google from "../../assets/login/google.png";
import Apple from "../../assets/login/apple.png";
import { useState } from "react";

const LoginNumber = ({ onSwitchToOtp }) => {

        const [formData, setFormData] = useState({ number: "", password: "", agreedToTerms: false });
        const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    
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
    
        const handleLogin = () => {
            if (!formData.agreedToTerms) {
                alert("Please agree to the Terms & Conditions before logging in.");
                return;
            }
            console.log("Email:", formData.number);
            console.log("Password:", formData.password);
            setFormData({ number: "", password: "", agreedToTerms: false })
        };

        const handleGetOtpClick = () => {
          if (!formData.number) {
            alert("Please enter your mobile number.");
            return;
          }
          onSwitchToOtp(formData.number);
        };
    

    return(
        <div>

          <div className="w-[37.5rem] h-[49.5rem] pl-12 pr-[3.063rem] pt-[3.125rem] pb-[8.625rem] bg-white rounded-[20px] shadow border border-[#f2f4f1] flex-col justify-start items-center inline-flex">
            <div className="self-stretch h-[37.75rem] flex-col justify-start items-center gap-[3.125rem] inline-flex">
              <div className="h-[4.875rem] flex-col justify-center items-center gap-[1.375rem] flex">
                <h1 className="self-stretch text-center text-black text-[2.188rem] font-normal font-['Pacifico'] leading-normal tracking-wide">Welcome Back</h1>
                <h4 className="w-[15.438rem] text-[#8b8b8b] text-lg font-normal font-['Pacifico']">Plants are the earth's lungs</h4>
              </div>
              <div className="self-stretch h-[20.5rem] flex-col justify-start items-start gap-12 flex">
                <div className="self-stretch h-[13.875rem] flex-col justify-start items-start gap-[1.875rem] flex">
                  <div className="self-stretch h-[4.313rem] flex-col justify-start items-start gap-2.5 flex">
                    <label className="self-stretch text-black text-base font-medium font-Poppins leading-normal tracking-wide">Mobile Number</label>
                    <div className="pr-[22.313rem] pt-[0.813rem] pb-px border-b border-[#cdcdcd] justify-start items-center inline-flex">
                      <input type="tel" name="number" value={formData.number} onChange={handleChange} placeholder="Enter Mobile Number" className="text-[#8b8b8b] pl-2 text-sm font-normal font-Poppins focus:outline-none " />
                    </div>
                  </div>
                  <div className="self-stretch h-[4.313rem] flex-col justify-start items-start gap-2.5 flex">
                     <label className="self-stretch text-black text-base font-medium font-Poppins leading-normal tracking-wide">Password</label>
                     <div className="h-[2.188rem] pr-[0.563rem] border-b border-[#cdcdcd] justify-start items-center inline-flex">
                        <div className="w-[30.875rem] self-stretch justify-between items-center inline-flex">
                           <input type={isPasswordVisible? "text" : "password" } name="password" value={formData.password} onChange={handleChange} placeholder="Enter Your Password" className="text-[#8b8b8b] pl-2 text-sm font-normal font-Poppins outline-none focus:outline-none focus:ring-0 " />
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
                <div className="self-stretch justify-center items-center gap-5 inline-flex">
                  <div onClick={handleLogin} className="w-[13.25rem] h-[3.625rem] px-[5.375rem] py-[1.438rem] bg-[#7aa262] rounded-[1.563rem] shadow flex-col justify-center items-center gap-2.5 inline-flex ">
                    <button className="w-[8.375rem] justify-center items-center gap-[1.438rem] inline-flex  text-white text-lg font-bold font-Poppins leading-normal tracking-wide ">Log In</button>
                  </div>
                  <div className="w-[2.188rem] h-[2.188rem] py-0.5 bg-[#e9eae9] rounded-[1.25rem] border border-[#e8e8e8] flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="w-[1.438rem] h-6 text-black text-base font-normal font-Poppins ">OR</div>
                  </div>
                  <div className="w-[13.25rem] h-[3.625rem] px-[5.375rem] py-[1.438rem] rounded-[1.563rem] shadow border border-[#cdcdcd] flex-col justify-center items-center gap-2.5 inline-flex ">
                    <button onClick={handleGetOtpClick} className="w-[8.375rem] justify-center items-center gap-[1.438rem] inline-flex  text-black text-lg font-bold font-Poppins ">Get OTP</button>
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-[3.125rem] inline-flex">
                <img src={Google} className="w-6 h-6 relative cursor-pointer" />
                <img src={Apple} className="w-6 h-6 relative cursor-pointer" />
              </div>
              <div className="justify-start items-center gap-[0.938rem] inline-flex">
                <h4 className="text-[#8b8b8b] text-sm font-normal font-Poppins ">Don’t have an account ? </h4>
                <h4 className="text-black text-base font-medium font-Poppins leading-normal tracking-wide cursor-pointer">Sign Up</h4>
              </div>
            </div>
          </div>

        </div>
    )
}

export default LoginNumber;