import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import Button from "./components/Button";
import ProductList from "./components/ProductsList";
import GreetingWithProps from "./components/GreetingWithProps";
import ConditionalExample from "./components/ConditionalExample";
import ClassNameExample from "./components/ClassNameExample";
import InlineFunctionExample from "./components/InlineFunctionExample";
import Counter from "./components/Counter";
import DependencyDemo from "./components/DependencyDemo";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Greeting />
      <GreetingWithProps name="Jan" role="Developer" />
      <Button />
      <ProductList />
      <Counter />
      <DependencyDemo />

      <ConditionalExample isLoggedIn={false} />
      <ClassNameExample isActive={true} isDisabled={false} />

      <InlineFunctionExample />
    </>
  );
}

export default App;
