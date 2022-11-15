import { useContext } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Main from "../Components/Main";

import { MyContext } from './_app';

const Home = () => {

  const {searchOpen, setSearchOpen} = useContext(MyContext);

  return (
    <div className="App">
      <Header />
      {searchOpen && <div id='searchOpen-bg' onClick={() => setSearchOpen(false)}></div>}
      <Main />
      <Footer />
    </div>
  )
}

export default Home;