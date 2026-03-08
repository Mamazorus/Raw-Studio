import Footer from "./Footer";
import Motion from "./Motion";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <section className="bg-black flex flex-col h-screen overflow-hidden">
      <Navbar />
      <Motion />
      <Footer />
    </section>
  );
}
