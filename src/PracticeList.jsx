//  import React from "react";

//  function PracticeList() {


//     const colors = ["Red", "Green", "blue", "Yellow"]

//     return(
//         <div>
//             {colors.map((color) =>
//             <p key={color}>{color}</p>
//             )}
//         </div>   
//     );
//  }

//  export default PracticeList;


import React from "react";

function PracticeList() {
  const colors = [
    { name: "Red", code: "rgba(245, 1, 1, 0.27)" },
    { name: "Green", code: "rgba(1, 245, 1, 0.27)" },
    { name: "Blue", code: "rgba(1, 1, 245, 0.27)" },
  ];

  return (
    <div>
      {colors.map((color) => (
        <p key={color.name} style={{ color: color.code }}>
          {color.name}
        </p>
      ))}
    </div>
  );
}

export default PracticeList;