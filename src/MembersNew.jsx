/* eslint-disable react/prop-types */
export function MembersNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateMember(params, () => event.target.reset());
  }

  return (
    <div>
      <h1>New Member</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Phone Number: <input name="phone_number" type="text" />
        </div>
        <div>
          Position: <input name="position" type="text" />
        </div>
        <button type="submit">Create Member</button>
      </form>
    </div>
  )
}