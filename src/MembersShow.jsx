/* eslint-disable react/prop-types */
export function MembersShow(props) {
  return (
    <div>
      <h1>Member Information</h1>
      <p>Name: {props.member.name}</p>
      <p>Phone Number: {props.member.phone_number}</p>
      <p>Position: {props.member.position}</p>
    </div>
  )
}