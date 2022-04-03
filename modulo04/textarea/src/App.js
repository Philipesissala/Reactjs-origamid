import React from "react";

function App() {
  const [textarea, setTextarea] = React.useState(null);

  return (
    <div>
      <textarea
        name=""
        id=""
        value={textarea}
        cols="30"
        rows="10"
        onChange={({ target }) => setTextarea(target.value)}
      ></textarea>
      {textarea}
    </div>
  );
}

export default App;
