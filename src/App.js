import './App.css';
import { Subscription } from './components/Subscription/Subscription';
import { data } from './data';
import { Blog } from './components/Blog/Blog';

function App() {
  return (
    <>
      <Subscription />
      <Blog title={data.title} blogs={data.blogs} />
    </>
  );
}

export default App;
