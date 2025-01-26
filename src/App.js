import "./App.css";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
      <div className="content">
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
