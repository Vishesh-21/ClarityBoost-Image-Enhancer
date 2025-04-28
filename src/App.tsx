import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

export const App: React.FC = () => {
  return (
    <main className=" bg-blue-100 relative px-10">
      {/* header component  */}
      <Header />
        {/* main component for main functionality  */}
        <Home />

      {/* Footer component  */}
      {/* <Footer /> */}
    </main>
  );
};
