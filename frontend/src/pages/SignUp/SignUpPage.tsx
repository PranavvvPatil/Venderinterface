import {useState} from 'react'
import Signup from '../../components/SignUp/SignUp'

const SignUpPage = () => {
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  const showPopup = (message: string) => {
    setPopupMessage(message);
    setTimeout(() => setPopupMessage(null), 3000);
  };
  

  return (
    <div className=" w-[100vw] h-[100vh] relative flex items-center justify-center bg-cover bg-center bg-[url('https://s3-alpha-sig.figma.com/img/b69f/b896/6a79ec5f2a9fcc0c6da7f2c6abce9fbc?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UTm85kUC5NtMghOMo~DyOa0DtpH7JT0HhKYMD2mMuEkya-Ua4~Cm50obbQ3h4mqRgSlN1eD1SgzEVrMZPpHEGyIIR9vKw~~FVCNtgEO0DtWuNyqQ1pmF2kpOKpy1Mf9Tk18fts1Ic40C2eX-SSQye-EheNohIhP2Hi25TDRfP87pzvozITkYmfUbxfCpQ41GGLYbmNo3zQ62ZX3e7K2mb0~cP65eNf0gLHzkJ4ZXfJ7bon9yADnpROuHpdGeGyqaxq1vrxU~jw9eZx8VSZmIQwNx0P8juoDeuHHH1BCZrydM8ckpR3dWLnhTZSQP8ZXwL1EMYm~q8R-a8iqyUoOsCA__')]">
        
          <Signup showPopup={showPopup} />
        
        {popupMessage && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300">
          {popupMessage}
        </div>
      )}
    </div>
  )
}

export default SignUpPage