import { Dispatch, SetStateAction } from "react";

type Person = {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
  handleClickOne: () => void;
};
export const Users = ({ user, setUser, handleClickOne }: Person) => {
  const handleClick = () => {
    setUser("user");
  };
  return (
    <div>
      <div>{user}</div>
      <button onClick={handleClick} type="submit">
        {" "}
        Click 1
      </button>
      <button onClick={handleClickOne} type="submit">
        Click2
      </button>
      <div className="text-purple-700">Н</div>
      <div>ХООЛНЫ ЦЭС</div>
      <div>ХҮРГЭЛТИЙН БҮС</div>
    </div>
  );
};
