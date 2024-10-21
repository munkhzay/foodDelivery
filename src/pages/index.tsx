import { Header } from "@/components/Navbar";
import { Users } from "@/components/User";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState("");
  const handleClickOne = () => {
    setUser("user");
  };
  return (
    <div>
      {/* <Users user={user} setUser={setUser} handleClickOne={handleClickOne} /> */}
      <Header />
    </div>
  );
}
