import React, { useState } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Main from "../Components/Main";

export const MyContext = React.createContext();

const Home = () => {

  const [searchOpen, setSearchOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  const [filterModalShow, setFilterModalShow] = useState(false);

  return (
    <MyContext.Provider
            value={{
                searchOpen, setSearchOpen,
                activeFilter, setActiveFilter,
                filterModalShow, setFilterModalShow
            }}>
      <div className="App">
        <Header />
        {
          searchOpen && <div id='searchOpen-bg' onClick={() => setSearchOpen(false)}></div>
        }
        <Main />
        <Footer />
      </div>
    </MyContext.Provider>
  )
}

export default Home;