/* eslint-disable react/prop-types */
export function MembersShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateMember(props.member.id, params, () => event.target.reset());
  }

  const handleClick = () => {
    props.onDestroyMember(props.member);
  }

  return (
    <div>
      <h1>Member Information</h1>
      <p>Name: {props.member.name}</p>
      <p>Phone Number: {props.member.phone_number}</p>
      <p>Position: {props.member.position}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.member.name} name="name" type="text" />
        </div>
        <div>
          Phone Number: <input defaultValue={props.member.phone_number} name="phone_number" type="text" />
        </div>
        <div>
          Position: <input defaultValue={props.member.position} name="position" type="text" />
        </div>
        <button type="submit">Update Member</button>
      </form>
      <button onClick={handleClick}>Delete Member</button>
    </div>
  )
}