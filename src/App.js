import './App.css';
import { Subscription } from './components/Subscription/Subscription';
import { data } from './data';
import { Blog } from './components/Blog/Blog';
import { Header } from './components/Header/Top-header/Header';
import { Ebook } from './components/EBook/Ebook';

function App() {
  return (
    <>
      <Header />
      <Ebook />
      <Subscription />
      <Blog title={data.title} blogs={data.blogs} />
    </>
  );
}

export default App;
