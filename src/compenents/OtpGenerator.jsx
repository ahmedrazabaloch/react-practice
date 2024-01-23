// import React, { useState, useEffect } from "react";

// function OtpGenerator() {
//   const [otp, setOtp] = useState("");
//   const [value, setValue] = useState("");
//   console.log(value.length);

//   const inputValue = (e) => {
//     setValue(e >= 6 ? e.target.value : alert("OTP must be lower then 6 digit"));
//   };

//   useEffect(() => {
//     let generatedOtp = "";
//     for (let i = 0; i < value || 6; i++) {
//       generatedOtp += Math.floor(Math.random() * 10).toString();
//     }
//     setOtp(generatedOtp);
//   }, [value]);

//   return (
//     <div>
//       <input
//         className=" border"
//         type="number"
//         value={value}
//         onChange={inputValue}
//       />
//       <h1>Generator OTP</h1>
//       <h3>{otp}</h3>
//     </div>
//   );
// }

// export default OtpGenerator;

import React, { useState, useEffect } from "react";

function OtpGenerator() {
  const [otp, setOtp] = useState("");
  const [value, setValue] = useState("");

  const inputValue = (e) => {
    const enteredValue = e.target.value;
    enteredValue <= 6
      ? setValue(enteredValue)
      : alert("OTP must be less than or equal to 6 digits");
  };

  useEffect(() => {
    let generatedOtp = "";
    for (let i = 0; i < value; i++) {
      generatedOtp += Math.floor(Math.random() * 10).toString();
    }
    setOtp(generatedOtp);
  }, [value]);

  return (
    <div>
      <input
        className="border"
        type="number"
        value={value}
        onChange={inputValue}
      />
      <h1>Generated OTP</h1>
      <h3>{otp}</h3>
    </div>
  );
}

export default OtpGenerator;
