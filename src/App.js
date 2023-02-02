import React from "react";
import { useRoutes } from "react-router-dom";
import HomeScreen from "../src/ContextPractice/HomeScreen";
import LoginScreen from "../src/ContextPractice/LoginScreen";
import UseReducerHook from "./Components/UseReducerHook";

// const App = () => {
//   let element = useRoutes([
//     {
//       path: "/",
//       element: <LoginScreen />,
//     },
//     {
//       path: "homepage",
//       element: <HomeScreen />,
//     },
//   ]);
//   return <div>{element}</div>;
// };

const App = () => {
  return (
    <div>
      <UseReducerHook />
    </div>
  );
};

export default App;
