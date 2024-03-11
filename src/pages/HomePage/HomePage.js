import "./HomePage.scss";

import { Subscription } from '../../components/Subscription/Subscription';
import { data } from '../../data';
import { Blog } from '../../components/Blog/Blog';
import { Header } from '../../components/Header/Top-header/Header';
import { Ebook } from '../../components/EBook/Ebook';
import { Categories } from '../../components/Categories/Categories';
import { Introduce } from '../../components/Introduce/Introduce';
import { FeaturedBook } from '../../components/FeaturedBook/FeaturedBook';
import { ReleaseBook } from '../../components/ReleaseBooks/ReleaseBook';
import { books } from '../../books';
import { Sale } from '../../components/Sale/Sale';
import { Footer } from '../../components/Footer/Footer';

export const HomePage = () => {
    return (
      <>
        <Header />
        <Introduce />
        <Categories />
        <Ebook />
        <ReleaseBook books={books}/>
        <FeaturedBook />
        <Sale />
        <Subscription />     
        <Blog title={data.title} blogs={data.blogs} />
        <Footer />
      </>
    );
  }