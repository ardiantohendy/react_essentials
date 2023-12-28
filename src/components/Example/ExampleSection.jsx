import { useState } from "react";
import TabButton from "../TabButton";
import { EXAMPLES } from "../../data-with-examples";
import Example from "../Example";
import Section from "./Section";
import Tab from "../Tabs";

function ExampleSection() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <Section title="Examples" id="examples">
      <Tab
        ButtonsContainer="menu"
        buttons={
          <>
            <TabButton isSelected={selectedTopic === "components"} onClick={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleSelect("jsx")}>
              JSX
            </TabButton>
            <TabButton isSelected={selectedTopic === "props"} onClick={() => handleSelect("props")}>
              Props
            </TabButton>
            <TabButton isSelected={selectedTopic === "state"} onClick={() => handleSelect("state")}>
              State
            </TabButton>
          </>
        }
      >
        {!selectedTopic ? <p>Please select a topic.</p> : <Example {...EXAMPLES[selectedTopic]} />}
      </Tab>
    </Section>
  );
}

export default ExampleSection;
