import axios from "axios";
import { useState, useEffect } from "react";
import { MembersIndex } from "./MembersIndex";

export function Content() {
  const [members, setMembers] = useState([]);

  const handleIndexMembers = () => {
    console.log("handleIndexMembers");
    axios.get("http://localhost:3000/members.json").then((response) => {
      console.log(response.data);
      setMembers(response.data);
    });
  };

  useEffect(handleIndexMembers, []);
  
  return (
    <div>
      <MembersIndex members={members} />
    </div>
  )
}