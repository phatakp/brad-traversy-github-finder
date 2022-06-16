import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import { AlertProvider } from "./context/github/alert/AlertContext";
import { GithubProvider } from "./context/github/GithubContext";
import About from "./pages/About";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import User from "./pages/User";

function App() {
  return (
    <Router>
      <GithubProvider>
        <AlertProvider>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/*" element={<PageNotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </AlertProvider>
      </GithubProvider>
    </Router>
  );
}

export default App;
