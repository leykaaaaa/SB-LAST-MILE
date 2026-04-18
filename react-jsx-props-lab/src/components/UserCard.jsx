function UserCard(props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

export default UserCard;