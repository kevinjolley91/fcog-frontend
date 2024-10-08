/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import { MembersIndex } from "./MembersIndex";
import { MembersNew } from "./MembersNew";
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

  const handleCreateMember = (params, successCallback) => {
    console.log("handleCreateMember", params);
    axios.post("http://localhost:3000/members.json", params).then((response) => {
      setMembers([...members, response.data]);
      successCallback();
    })
  }

  const handleShowMember = (member) => {
    console.log("handleShowMember", member);
    setIsMemberShowVisible(true);
    setCurrentMember(member);
  };

  const handleUpdateMember = (id, params, successCallback) => {
    console.log("handleUpdateMember", params);
    axios.patch(`http://localhost:3000/members/${id}.json`, params).then((response) => {
      setMembers(
        members.map((member) => {
          if (member.id === response.data.id) {
            return response.data;
          } else {
            return member;
          }
        })
      );
      successCallback();
      handleClose();
    })
  }

  const handleClose = () => {
    console.log("handleClose");
    setIsMemberShowVisible(false);
  };

  const handleDestroyMember = (member) => {
    console.log("handleDestroyMember", member);
    axios.delete(`http://localhost:3000/members/${member.id}.json`).then((response) => {
      setMembers(members.filter((m) => m.id !== member.id));
      handleClose();
    })
  }

  useEffect(handleIndexMembers, []);
  
  return (
    <div>
      <MembersNew onCreateMember={handleCreateMember} />
      <MembersIndex members={members} onShowMember={handleShowMember} />
      <Modal show={isMemberShowVisible} onClose={handleClose}>
        <MembersShow member={currentMember} onUpdateMember={handleUpdateMember} onDestroyMember={handleDestroyMember} />
      </Modal>
    </div>
  )
}