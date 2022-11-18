import { useContext } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Listing from "../Components/Listing";
import Filters from '../Components/Filters';

import { MyContext } from './_app';

const Home = () => {

  const {searchOpen, setSearchOpen} = useContext(MyContext);

  return (
    <div className="App">
      <Header />
      {searchOpen && <div id='searchOpen-bg' onClick={() => setSearchOpen(false)}></div>}

      <main>
        <Filters />
        <Listing onlyFav={false} />
      </main>

      <Footer />
    </div>
  )
}

export default Home;