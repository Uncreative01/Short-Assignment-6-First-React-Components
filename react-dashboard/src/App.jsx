import Weather from "./components/Weather";
import Stock from "./components/Stock";
import BreakingNews from "./components/BreakingNews";
import "./App.css";

function App() {
  return (
    <div className="dashboard">
      <Weather 
        city="Halifax"
        temperature={12}
        condition="Cloudy"
      />

      <Stock 
        company="Tesla"
        price={245.30}
        change={-1.25}
      />

      <BreakingNews 
        headline="AI Technology Expands Rapidly in 2026"
        summary="Major tech companies continue investing heavily in AI research and infrastructure worldwide."
      />
    </div>
  );
}

export default App;