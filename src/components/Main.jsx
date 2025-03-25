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
              isActive={activeId === element.id}
              onClick={() => setActiveId(element.id)}
            />
          ))}
        </div>
        <div>
          {activeId === 0 ? (
            <div className="card card-body">
              You have not yet selected a button
            </div>
          ) : (
            webDevFundamentals.map((element) =>
              activeId === element.id ? (
                <Descriptions
                  key={element.id}
                  description={element.description}
                />
              ) : null
            )
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
