import { Container, Row, Button, Carousel } from 'react-bootstrap';
import Houses from '../Json/houses.json';
import { AiTwotoneHeart } from 'react-icons/ai';
import { shortenAddress } from '../Utils/shortenAddress';
import { FcPrevious, FcNext } from 'react-icons/fc';
import { useEffect, useState } from 'react';

const MyCarousel = ({name, photoUrl}) => {

    const prevIcon = <FcPrevious/>;
    const nextIcon = <FcNext/>;

    return <Carousel 
        interval={null}
        prevIcon={prevIcon}
        nextIcon={nextIcon} >
        {
            photoUrl.map((photo, key) => {
                return <Carousel.Item key={key}>
                    <img
                        className="d-block w-100 rounded"
                        src={photo}
                        alt={name} />
            </Carousel.Item>
            })
        }
    </Carousel>
}

const Listing = ({onlyFav}) => {

    const [favorites, setFavorites] = useState([]);

    let HousesFav;
    onlyFav && (HousesFav = Houses.filter(house => favorites.includes(house.id)));

    const handleHeart = (id) => {
        let updatedList = [...favorites];
        if (favorites.includes(id)) {
            updatedList.splice(favorites.indexOf(id), 1);
        } else {
            if (favorites[0] === null) {
                updatedList = [id];
            } else {
                updatedList = [...favorites, id];
            }
        }
        setFavorites(updatedList);
        localStorage.setItem('favorites', updatedList)
    }

    useEffect(() => {
        setFavorites(JSON.parse("[" + localStorage.getItem('favorites') + "]"));
    }, [])

    return (
        <Container>
            <Row>
                {
                    onlyFav ?
                    HousesFav.map(house => (
                        <div key={house.id} className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-15'>
                            <div className='house mb-4'>
                                <div className='position-relative'>
                                    <MyCarousel name={house.name} photoUrl={house.photoUrl} />
                                    <Button variant='link' className='p-0 border-0 d-flex heart'>
                                        <AiTwotoneHeart
                                            className={favorites.includes(house.id) ? 'checked' : 'unchecked'}
                                            onClick={() => handleHeart(house.id)} />
                                    </Button>
                                </div>
                                <h2 className='fs-6 m-0 mt-2'>{house.name}</h2>
                                <p className='fs-6 m-0 text-muted fw-light'>Propriétaire: {shortenAddress(house.owner)}</p>
                                <p className='fs-6 m-0 fw-light mt-1'><span className='fw-normal'>{house.price} ETH</span> par nuit</p>
                            </div>
                        </div>
                    ))
                    :
                    Houses.map(house => (
                        <div key={house.id} className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-15'>
                            <div className='house mb-4'>
                                <div className='position-relative'>
                                    <MyCarousel name={house.name} photoUrl={house.photoUrl} />
                                    <Button variant='link' className='p-0 border-0 d-flex heart'>
                                        <AiTwotoneHeart
                                            className={favorites.includes(house.id) ? 'checked' : 'unchecked'}
                                            onClick={() => handleHeart(house.id)} />
                                    </Button>
                                </div>
                                <h2 className='fs-6 m-0 mt-2'>{house.name}</h2>
                                <p className='fs-6 m-0 text-muted fw-light'>Propriétaire: {shortenAddress(house.owner)}</p>
                                <p className='fs-6 m-0 fw-light mt-1'><span className='fw-normal'>{house.price} ETH</span> par nuit</p>
                            </div>
                        </div>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Listing;