import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

export const App: React.FC = () => {
  return (
    <main className="bg-blue-100 w-full min-h-screen relative md:px-10 px-5">
      {/* header component  */}
      <Header />
      {/* main component for main functionality  */}
      <Home />

      {/* Footer component  */}
      <Footer />
    </main>
  );
};
