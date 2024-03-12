import './App.css';
import { BookCatalog } from './components/BookCatalog/BookCatalog';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Top-header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { catalog } from './catalog';

function App() {
  return (
    <>
      <Header />
      <BookCatalog catalog={catalog}/>
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
