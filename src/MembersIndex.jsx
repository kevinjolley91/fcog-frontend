/* eslint-disable react/prop-types */
export function MembersIndex(props) {
  return (
    <div>
      <h1>All Members</h1>
      {props.members.map((member) => (
        <div key={member.id}>
          <h2>{member.name}</h2>
          <p>Phone Number: {member.phone_number}</p>
          <p>Position: {member.position}</p>
          </div>
      ))}
    </div>
  )
}