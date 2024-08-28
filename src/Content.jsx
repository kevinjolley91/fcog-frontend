import axios from "axios";
import { useState, useEffect } from "react";
import { MembersIndex } from "./MembersIndex";
import { MembersShow } from "./MembersShow";
import { Modal } from "./Modal";

export function Content() {
  const [members, setMembers] = useState([]);
  const [isMemberShowVisible, setIsMemberShowVisible] = useState(false);
  const [currentMember, setCurrentMember] = useState({});

  const handleIndexMembers = () => {
    console.log("handleIndexMembers");
    axios.get("http://localhost:3000/members.json").then((response) => {
      console.log(response.data);
      setMembers(response.data);
    });
  };

  const handleShowMember = (member) => {
    console.log("handleShowMember", member);
    setIsMemberShowVisible(true);
    setCurrentMember(member);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsMemberShowVisible(false);
  };

  useEffect(handleIndexMembers, []);
  
  return (
    <div>
      <MembersIndex members={members} onShowMember={handleShowMember} />
      <Modal show={isMemberShowVisible} onClose={handleClose}>
        <MembersShow member={currentMember} />
      </Modal>
    </div>
  )
}