import Footer from "@/components/Footer";
import { Header } from "@/components/Navbar";
import { useState } from "react";
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";

const SignIn = () => {
  const [hide, setHide] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const eyes = hide === false ? <RxEyeOpen /> : <GoEyeClosed />;
  console.log(eyes);
  const eyesOpen = () => {
    setHide(!hide);
  };
  return (
    <div className="flex flex-col gap-52 ">
      <Header />
      <div className="text-center flex flex-col gap-10">
        <p className="text-2xl font-bold">Нэвтрэх</p>
        <div className="flex flex-col gap-7 items-center text-start">
          <div className="flex flex-col gap-2">
            <div>
              <p className="bottom-1">Имайл</p>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="grow"
                  placeholder="Имэйл хаягаа оруулна уу"
                />
              </label>
            </div>
            <div>
              <p className="bottom-1">Нууц үг</p>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  //   type="password"
                  className="grow"
                  //   value="password"
                  placeholder="Нууц үг "
                />
                <div onClick={eyesOpen}>{eyes}</div>
              </label>
              <button className="ml-36">Нууц үг сэргээх</button>
            </div>
          </div>
          <div className="text-center ">
            {" "}
            <button className="btn btn-wide">Нэвтрэх</button>
            <p className="my-2">Эсвэл</p>
            <button className="btn btn-outline btn-success text-white w-[256px]">
              Бүртгүүлэх
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SignIn;
