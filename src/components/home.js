import React from "react";
import { TopSection, CallToAction } from "../components";

/**
 * Basic home page
 * @param {*} param0
 */
const Home = () => {
  const title = "Sainsburys store locator";
  const description = "Find a Sainsbury's Local store around you.";

  return (
    <section>
      <TopSection title={title} description={description} />
      <CallToAction />
    </section>
  );
};

export default Home;
