import "./App.css";
import UserInfo from "./components/UserInfo";
import AddressInfo from "./components/AddressInfo";
import SubmitInfo from "./components/SubmitInfo";
import Header from "./components/Header";
import { useState } from "react";
import { useData } from "./context/UserData";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [index, setIndex] = useState(0);
  const { title } = useData();
  // console.log(title);

  const content = {
    0: <UserInfo />,
    1: <AddressInfo />,
    2: <SubmitInfo />,
  };
  return (
    <div className="bg-teal-500 h-screen text-slate-300 p-7 flex justify-center">
      <div className="p-10 bg-zinc-900 w-max h-fit">
        <ProgressBar title={title} index={index} />
        <Header title={title} index={index} setIndex={setIndex} />
        {content[index]}
      </div>
    </div>
  );
}

export default App;
