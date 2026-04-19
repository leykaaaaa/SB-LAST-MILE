function DataList({ data }) {
  return (
    <div>
      {data.slice(0, 10).map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default DataList;