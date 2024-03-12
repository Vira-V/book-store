import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Top-header/Header';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
