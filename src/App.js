import Buttons from "./Components/Buttons";
import Card from "./Components/UI/Card";
import Balance from "./Components/Balance";
import Logo from "./Components/UI/Logo";

function App() {
  return (
    <div className="flex flex-row justify-center items-center h-screen bg-slate-100">
      <Card>
        <Logo />
        <div className="flex flex-col col-span-3 pl-8">
          <Balance />
        </div>
      </Card>
    </div>
  );
}

export default App;
