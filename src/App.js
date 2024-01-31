import './App.css';
import { Subscription } from './components/Subscription/Subscription';
import { data } from './data';
import { Blog } from './components/Blog/Blog';
import { Header } from './components/Header/Top-header/Header';

function App() {
  return (
    <>
      <Header />
      <Subscription />
      <Blog title={data.title} blogs={data.blogs} />
    </>
  );
}

export default App;
