import Chips from "./Components/Chips";
import Farm2 from "./Components/farm2";
import Farm from "./Components/Form";
import { SkillsProvider } from "./Context/Skills";



function App() {
  return (
    <div className="App">
      <SkillsProvider>
      <Farm2></Farm2>
      {/* <Farm></Farm> */}
      {/* <Chips></Chips> */}
      </SkillsProvider>
    </div>
  );
}

export default App;
