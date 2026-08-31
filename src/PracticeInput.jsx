import { useState } from "react";

function PracticeInput() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <p>You typed: {text}</p>
      <p>Character count: {text.length}</p>
    </div>
  );
}

export default PracticeInput;