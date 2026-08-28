import { useEffect , useState} from "react";


function PracticeEffect() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count is now:", count)
    }, [count]);

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1 )}>Increase</button>
            
        </div>
    );
}



export default PracticeEffect;

