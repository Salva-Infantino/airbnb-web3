import { Container } from 'react-bootstrap';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Listing from "../../Components/Listing";
import { MyContext } from "../_app";
import { useContext } from "react";

const Favorites = () => {

    const { searchOpen, setSearchOpen } = useContext(MyContext);

    return (
        <div className="App">
            <Header />
            {searchOpen && <div id='searchOpen-bg' onClick={() => setSearchOpen(false)}></div>}

            <main>
                <Container>
                    <h2 className="my-5">Mes favoris</h2>
                </Container>

                <Listing onlyFav={true} />
            </main>
                
            <Footer />
        </div>
    )
}

export default Favorites;