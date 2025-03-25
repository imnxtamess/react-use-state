import { useState } from "react";
import Buttons from "./Buttons";
import Descriptions from "./Descriptions";
import webDevFundamentals from "../data/webDevFundamentals";

function Main() {
  const [activeId, setActiveId] = useState(0);
  return (
    <main>
      <header>
        <h1 className="p-5 bg-light">Learn Web Development</h1>
      </header>
      <div className="px-5">
        <div className="d-flex">
          {webDevFundamentals.map((element) => (
            <Buttons
              key={element.id}
              title={element.title}
              isActive={activeId === element.id} // IsActive is a boolean indicating wether or not the button is active (clicked)
              onClick={() => setActiveId(element.id)} // Updates the activeId state to the ID of the clicked button
            />
          ))}
        </div>
        <div>
          {activeId ===
          0 /* Checks if no button is selected and prints the default message */ ? (
            <div className="card">
              <div className="card-header fw-bold">Select a button</div>
              <div className="card-body">
                Please click on a button if you want to see a short summary of
                the selected element
              </div>
            </div>
          ) : (
            /*Else if */ webDevFundamentals.map(
              (element) =>
                activeId === element.id ? ( // Checks if the selected id exists
                  <Descriptions
                    key={element.id + 6}
                    title={element.title}
                    description={element.description}
                  />
                ) : null // else null
            )
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
