import react from "react";  

function Summary({count}) 
{
    return(
        <div>
            <h3>Summary: Button Clicked {count} times so far</h3>
        </div>
    );
}

export default Summary;