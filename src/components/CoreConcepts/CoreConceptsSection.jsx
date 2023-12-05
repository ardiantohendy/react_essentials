import { CORE_CONCEPTS } from "../../data-with-examples";
import CoreConcepts from "./CoreConceptsCard";

export default function CoreConceptsSection() {
  return (
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
  );
}
