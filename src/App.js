import Navbar from "./components/navigation.js"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Banner from "./components/Banner.js";
import Content from "./components/Content.js";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Banner />
        <Content />
    </div>
  );
}

export default App;
