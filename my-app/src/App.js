
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import Sidebar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike" age="32" />
      {/* <Sidebar />  */}
      <StatefulGreeting greeting="I'm a stateful class component!" name="John" />

    </div>
  );
}

export default App;
