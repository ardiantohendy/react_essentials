import "../index.css";

function Tab({ buttons, children }) {
  return (
    <>
      <main>{buttons}</main>
      {children}
    </>
  );
}

export default Tab;
