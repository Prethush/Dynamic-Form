import { useState } from "react";
import Form from "./Form";

function Home() {
  const [buttonSelected, setButtonSelected] = useState(null);

  const handleButtonClicked = (data) => {
    setButtonSelected(data);
  };
  return (
    <main>
      <div className="text-center mt-5">
        <h2>Select a button</h2>
        <button
          style={{
            marginRight: "1rem",
            padding: ".3rem .8rem",
            borderRadius: ".5rem",
            border: "none",
            backgroundColor: "green",
            color: "#fff",
          }}
          onClick={() => handleButtonClicked("btn1")}
        >
          Drug 1
        </button>
        <button
          style={{
            padding: ".3rem .8rem",
            borderRadius: ".5rem",
            border: "none",
            backgroundColor: "green",
            color: "#fff",
          }}
          onClick={() => handleButtonClicked("btn2")}
        >
          Drug 2
        </button>
      </div>
      {buttonSelected && <Form buttonSelected={buttonSelected} />}
    </main>
  );
}

export default Home;
