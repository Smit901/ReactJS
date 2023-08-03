import { useData } from "../context/UserData";

const Header = ({ title, index, setIndex }) => {

  const { data } = useData();
  const hiddenPrev = index <= 0 ? "hidden" : "bllock";
  const hiddenNext =
    index >= Object.keys(title).length - 1 ? "hidden" : "block";

  const lastPage = Object.keys(title).length - 1;

  const handleSubmit = () =>{
    console.log(data)
  }

  return (
    <div className="mb-10 flex justify-between">
      <div>{title[index]}</div>
      <div className="w-4/12 flex justify-between">
        <button
          className={`bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md p-1 ${hiddenPrev}`}
          onClick={() => setIndex((prev) => (prev <= 0 ? prev : prev - 1))}
        >
          prev
        </button>
        &nbsp;&nbsp;
        {lastPage === index ? (
          <button
            className={`bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md p-1 ${hiddenPrev}`}
            onClick={handleSubmit}
          >
            Submit
          </button>
        ) : (
          <button
            className={`bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md p-1 ${hiddenNext}`}
            onClick={() => setIndex((prev) => prev + 1)}
          >
            next
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
