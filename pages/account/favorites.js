import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { MyContext } from "../_app";
import { useContext } from "react";

const Favorites = () => {

    const { searchOpen } = useContext(MyContext);

    return (
        <div className="App">
            <Header />
            {searchOpen && <div id='searchOpen-bg' onClick={() => setSearchOpen(false)}></div>}
            <Footer />
        </div>
    )
}

export default Favorites;