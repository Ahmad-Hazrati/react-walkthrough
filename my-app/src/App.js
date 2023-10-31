
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import Sidebar from './components/Sidebar';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from "./components/StatefulGreetingWithCallback";
// import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";
  // import EventClass from "./components/EventClass";
  // import EventsFunctional from "./components/EventsFunctional";
  // import EventBinding from "./components/EventBinding";
  import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
  import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike" age="32" /> */}
      {/* <Sidebar />  */}
      {/* <StatefulGreeting greeting="I'm a stateful class component!" name="John" /> */}
      {/* <StatefulGreetingWithCallback greeting="I'm a stateful class component!" name="John" />  */}
      {/* <StatefulGreetingWithPrevState greeting="I'm a stateful class component!" name="John" />  */}
      {/* <EventClass /> */}
      {/* <EventsFunctional /> */}
    {/* <EventBinding /> */}
    <ConditionalRenderingClass />
    <ConditionalRenderingFunctional connected={false} />


    </div>
  );
}

export default App;
