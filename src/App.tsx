import Search from "./components/Search";
import List from "./components/List";

function App() {
  return (
    <div className="w-[650px] bg-white p-10 border border-gray-200 rounded-3xl shadow-lg flex flex-col absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Search />
      <List />
    </div>
  );
}

export default App;
