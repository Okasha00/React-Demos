import {useState, useEffect} from "react";

function Counter() 
{
    const [count, setCount] = useState(0);

    useEffect(() => { 
        console.log("count changed to: " + count);
    } , [count]); 


    useEffect (() =>{
        console.log("Component mounted");
    }, []);

    useEffect(() => {
        document.title = `Clicked ${count} times` ;
    }, [count]);

    return(
        <div>
            <p> You clicked {count} times</p>
            <button onClick={() => setCount (count + 1)} >Click Me</button>

            {count >= 3 && <p>You clicked 3 or more times!</p>}
        </div>
    );
}

export default Counter;
