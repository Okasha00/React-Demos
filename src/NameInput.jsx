import {useState} from 'react';  


function NameInput() {
    const [text, setText ] = useState("");

    return (
        <div>
            <input 
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your name"
            />
            <p> You typed: {text} </p>

            
        </div>
    );
}

export default NameInput;