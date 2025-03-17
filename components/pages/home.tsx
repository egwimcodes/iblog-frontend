import All_Articles from "./home_sections/all_articles";
import Newest_Section from "./home_sections/newest_section";

function Home() {


  return (
    <main className="w-11/12 md:w-11/12 lg:w-10/12 mx-auto mt-10">
      <Newest_Section />
      <All_Articles />
    </main>
  );
}

export default Home;
