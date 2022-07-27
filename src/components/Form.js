import { useState, useEffect } from "react";
import drug1 from "../utils/drug1.json";
import drug2 from "../utils/drug2.json";

function Form({ buttonSelected }) {
  const [inputData, setInputData] = useState(null);

  useEffect(() => {
    let inputInfo = buttonSelected === "btn1" ? drug1.fields : drug2.fields;
    setInputData(inputInfo);
  }, [buttonSelected]);

  return (
    <div className="container mt-5">
      <form
        style={{
          width: "70%",
          margin: "0 auto",
          backgroundColor: "lightgray",
          padding: "2rem",
          borderRadius: ".3rem",
        }}
      >
        {inputData &&
          inputData.map((input) => {
            return input.type !== "dropdown" ? (
              <div className="mb-3" key={input.order}>
                <label htmlFor={input.label} className="form-label">
                  {input.label}
                </label>
                <input
                  type={input.type}
                  name={input.key}
                  required={input.isRequired}
                  id={input.label}
                  readOnly={input.isReadonly}
                  className="form-control"
                />
              </div>
            ) : (
              <div className="mb-3" key={input.order}>
                <label htmlFor="">{input.label}</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name={input.key}
                  readOnly={input.isReadonly}
                >
                  <option defaultValue={null}>Select Gender</option>
                  {input.items.map((item, i) => {
                    return (
                      <option key={i} value={item.value}>
                        {item.text}
                      </option>
                    );
                  })}
                </select>
              </div>
            );
          })}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
