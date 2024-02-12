import './App.css';
import { Subscription } from './components/Subscription/Subscription';
import { data } from './data';
import { Blog } from './components/Blog/Blog';
import { Header } from './components/Header/Top-header/Header';
import { Ebook } from './components/EBook/Ebook';
import { Categories } from './components/Categories/Categories';
import { Introduce } from './components/Introduce/Introduce';
import { FeaturedBook } from './components/FeaturedBook/FeaturedBook';

function App() {
  return (
    <>
      <Header />
      <Introduce />
      <Categories />
      <Ebook />
      <FeaturedBook />
      <Subscription />
      <Blog title={data.title} blogs={data.blogs} />
    </>
  );
}

export default App;
