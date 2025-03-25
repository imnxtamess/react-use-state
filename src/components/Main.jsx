import Buttons from "./Buttons";
import Descriptions from "./Descriptions";
import webDevFundamentals from "../data/webDevFundamentals";

function Main() {
  return (
    <main>
      <header>
        <h1 className="p-5 bg-light">Learn Web Development</h1>
      </header>
      <div className="px-5">
        <div className="d-flex">
          {webDevFundamentals.map((element) => (
            <Buttons key={element.id} title={element.title} />
          ))}
        </div>
        <div>
          {webDevFundamentals.map((element) => (
            <Descriptions key={element.id} description={element.description} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Main;
