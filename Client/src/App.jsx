import { Navbar, Welcome, Footer, Services } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome ">
      <Navbar />
      <Welcome />
    </div>
    <div className="gradient-bg-services"> 
    <Services />
    </div>
   
   
    <Footer />
  </div>
);

export default App;