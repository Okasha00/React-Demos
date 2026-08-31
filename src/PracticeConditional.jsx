import { useState } from "react";


function PracticeConditional() {

    const [count, setCount] = useState(0);

    return(

        <div>
            <p>
                Count: {count}
            </p>

            <button onClick={() => setCount(count + 1)} >
                Increse
            </button>

            {count >= 5 && <p> You Reached 5 or more!</p>}

            <p>{count % 2 === 0 ?"Even number" : "Odd Number"}</p>

        </div>
        
    );

}

export default PracticeConditional;