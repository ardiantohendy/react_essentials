import Header from "./components/Header/Header";
import CoreConceptsSection from "./components/CoreConcepts/CoreConceptsSection";
import ExampleSection from "./components/Example/ExampleSection";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConceptsSection />
        <ExampleSection />
      </main>
    </div>
  );
}

export default App;
