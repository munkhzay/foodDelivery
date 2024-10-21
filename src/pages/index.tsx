import {  Users } from "@/component/User";
import { useState } from "react";

export default function Home(){
const [user, setUser]=useState("")
  const handleClickOne=()=>{
    setUser("user")
  }
  return <div>
<Users user={user} setUser={setUser} handleClickOne={handleClickOne} />
  </div>
}
