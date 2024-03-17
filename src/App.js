import Navbar from "./component/Nav";
import Header from "./component/Header";
import "./App.css"
import UseCases from "./component/UseCases";
import IdentifyYourCustomer from "./component/IdentifyYourCustomer";
import DottaSolution from "./component/DottaSolution";
import MarchantPortal from "./component/MarchantPortal";
import Blog from "./component/Blog";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App w-[100%] overflow-hidden">
      <Navbar />
      <Header />
      <IdentifyYourCustomer />
      <DottaSolution />
      <UseCases />
      <MarchantPortal />
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
