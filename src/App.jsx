import { useState } from "react";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConceptsCard";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data-with-examples";
import Example from "./components/Example";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* with map method */}
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcepts {...conceptItem} />
            ))}

            {/* manual method */}
            {/* hard ways */}

            {/* <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} /> */}

            {/* easy ways */}

            {/* <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>
              JSX
            </TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>
              Props
            </TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>
              State
            </TabButton>
          </menu>
          {!selectedTopic ? <p>Please select a topic.</p> : <Example {...EXAMPLES[selectedTopic]} />}
        </section>
      </main>
    </div>
  );
}

export default App;
