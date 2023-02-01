import React, { useState } from "react";

function NewCodeForm() {
  const [code, setCode] = useState({ title: "", code: "", isPublic: false });
  function handleChange(event) {
    const { name, value } = event.target;
    setCode((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  return (
    <>
      <textarea
        type="text"
        name="title"
        value={code.title}
        onChange={handleChange}
      />
      <br />
      <textarea
        style={{ width: "50rem", height: "10rem" }}
        type="text"
        name="code"
        className="newLine"
        value={code.code}
        onChange={handleChange}
      />
      <br />
      <div
        className="btn btn-primary"
        onClick={() => {
          console.log(code);
        }}
      >
        save
      </div>
    </>
  );
}

export default NewCodeForm;
