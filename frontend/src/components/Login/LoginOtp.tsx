import { useState, useRef } from "react";

const LoginOtp = ({ mobileNumber }) => {

    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputRefs = useRef([]);

    const handleChange = (index, value) => {
        if (/^\d$/.test(value) || value === "") {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value !== "" && index < otp.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData("text").slice(0, otp.length);
        const newOtp = [...otp];

        for (let i = 0; i < pasteData.length; i++) {
            if (/^\d$/.test(pasteData[i])) {
                newOtp[i] = pasteData[i];
            }
        }

        setOtp(newOtp);

        const nextIndex = pasteData.length < otp.length ? pasteData.length : otp.length - 1;
        inputRefs.current[nextIndex].focus();
    };

    const handleBackspace = (index, e) => {
        if (e.key === "Backspace" && otp[index] === "" && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return(
        <div>

          <div className="w-[37.5rem] h-[49.5rem] pl-[3.063rem] pr-12 pt-[4.938rem] pb-[13.25rem] bg-white rounded-[1.25rem] shadow border border-[#f2f4f1] flex-col justify-start items-center inline-flex">
            <div className="self-stretch h-[31.313rem] flex-col justify-start items-center gap-[7.125rem] inline-flex">
              <div className="self-stretch h-[31.313rem] flex-col justify-start items-center gap-[2.938rem] flex">
                <div className="h-[4.875rem] flex-col justify-center items-center gap-[1.375rem] flex">
                  <h1 className="self-stretch text-center text-black text-[2.188rem] font-normal font-['Pacifico'] leading-normal tracking-wide">Welcome Back</h1>
                  <h3 className="w-[15.438rem] text-[#8b8b8b] text-lg font-normal font-['Pacifico'] ">Plants are the earth's lungs</h3>
                </div>
                <div className="self-stretch h-[23.5rem] flex-col justify-start items-center gap-[5.188rem] flex">
                  <h5 className="w-[20.688rem] text-black text-base font-medium font-Poppins leading-normal tracking-wide">A 4-digit OTP will be sent via SMS to verify your mobile number {mobileNumber} </h5>
                  <div className="self-stretch h-[15.313rem] flex-col justify-start items-center gap-12 flex">
                    <div className="h-[6.188rem] flex-col justify-center items-center gap-5 flex">
                      <div className="self-stretch justify-center items-center gap-[2.563rem] inline-flex">
                        {otp.map((digit, index) => (
                        <input
                          key={index}
                          type="text"
                          value={digit}
                          onChange={(e) => handleChange(index, e.target.value)}
                          onKeyDown={(e) => handleBackspace(index, e)}
                          onPaste={index === 0 ? handlePaste : undefined}
                          ref={(el) => (inputRefs.current[index] = el)}
                          maxLength={1} 
                          className="w-[3.438rem] h-[3.438rem] relative text-center text-[1.5rem] rounded-[15px] border border-[#adabab]"/>
                        ))}
                      </div>
                      <div className="justify-start items-center gap-2 inline-flex">
                        <p className="text-[#8b8b8b] text-base font-medium font-Poppins leading-normal tracking-wide">Didn’t get the OTP?</p>
                        <div className="pr-1 justify-start items-center flex">
                          <h5 className="text-black text-lg font-semibold font-Poppins cursor-pointer ">Resend OTP</h5>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-[6.125rem] flex-col justify-center items-center gap-4 flex">
                      <button className="self-stretch px-[9.75rem] py-[1.063rem] bg-[#7aa262] rounded-[1.563rem] shadow justify-center items-center gap-2.5 inline-flex text-white text-lg font-bold font-Poppins leading-normal tracking-wide">Verify</button>
                      <p className="self-stretch text-center text-[#e03333] text-base font-medium font-Poppins leading-normal tracking-wide">Valid for 10 Minutes </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
    )
}

export default LoginOtp;