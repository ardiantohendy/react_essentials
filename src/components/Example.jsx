function Example(props) {
  return (
    <div id="tab-content">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <pre>
        <code>{props.code}</code>
      </pre>
    </div>
  );
}

export default Example;
