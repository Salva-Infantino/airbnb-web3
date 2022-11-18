import React, { useState } from 'react';
import '../styles/App.scss';

export const MyContext = React.createContext();

function MyApp({ Component, pageProps }) {

  const [searchOpen, setSearchOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  const [filterModalShow, setFilterModalShow] = useState(false);
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
  const [showModalFooter, setShowModalFooter] = useState(false);

  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

  return (
    <MyContext.Provider
            value={{
                searchOpen, setSearchOpen,
                activeFilter, setActiveFilter,
                filterModalShow, setFilterModalShow,
                origin,
                dateStart, setDateStart,
                dateEnd, setDateEnd,
                showModalFooter, setShowModalFooter
            }}>
      <Component {...pageProps} />
    </MyContext.Provider>
  )
}

export default MyApp
