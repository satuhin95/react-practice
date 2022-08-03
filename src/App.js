import Todo from "./components/Todo";
import Counter from "./components/Counter";
import ComplexCounter from "./components/ComplexCounter";
import LayoutComponentOne from "./CustomHook/LayoutComponentOne";
import LayoutComponentTwo from "./CustomHook/LayoutComponentTwo";
function App() {
  return (
    <div className="App">
      {/* <Todo/>
      <Counter/>
      <ComplexCounter/> */}
      <LayoutComponentOne/>
      {/* <LayoutComponentTwo/> */}
    </div>
  );
}

export default App;
