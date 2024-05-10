import DateInput from "./components/DateInput.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <h1 className="text-center w-full mx-auto font-bold text-5xl my-10">
        Dhaka Popular Travel Ltd
      </h1>
      <h2 className="max-w-7xl mx-auto px-4 font-semibold text-2xl">Find and Book your flight</h2>
      <DateInput></DateInput>
      <Footer></Footer>
    </div>
  );
}

export default App;
