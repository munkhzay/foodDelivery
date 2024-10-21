import { Pinelogo } from "../../public/icons/Logo";
import { FaBucket } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
export const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div className=" flex gap-10 text-base font-semibold items-center">
          {" "}
          <Pinelogo />
          <div>НҮҮР</div>
          <div>ХООЛНЫ ЦЭС</div>
          <div>ХҮРГЭЛТИЙН БҮС</div>
        </div>
      </div>
      <div className="flex-none gap-5">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="flex flex-row gap-4 items-center"
          >
            <div className=" rounded-full ">
              <FaBucket />
            </div>
            <div>САГС</div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="  flex flex-row items-center gap-4"
          >
            <div className="w-10 rounded-full">
              <img
                className="rounded-full"
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />{" "}
            </div>{" "}
            <div>Нэвтрэх</div>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex justify-between">
    //   <div className="flex">
    //     {" "}
    //     <Pinelogo />
    //     <div>НҮҮР</div>
    //     <div>ХООЛНЫ ЦЭС</div> <div>ХҮРГЭЛТИЙН ҮЙЛЧИЛГЭЭ</div>
    //   </div>
    //   <div className="flex flex-row justify-between ">
    //     <div>
    //       <FaBucket />
    //       САГС
    //     </div>
    //     <div>
    //       <VscAccount />
    //       Нэвтрэх
    //     </div>
    //   </div>
    // </div>
  );
};
