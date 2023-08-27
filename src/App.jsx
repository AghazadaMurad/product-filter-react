import "./App.css";

//componets
import Header from "./componets/Header/Header";
import Brands from "./componets/Brands/Brands";

function App() {
  return (
    <div className="flex justify-center items-center h-screen flex flex-col bg-[#1D6CAD]">
      <Header></Header>
      <div className="w-[400px] h-[600px] bg-white">
        <p className="text-center mt-5 text-[#3C3B3D] text-lg">
          Select your fovorite brands
        </p>
        <Brands />
      </div>
    </div>
  );
}

export default App;
