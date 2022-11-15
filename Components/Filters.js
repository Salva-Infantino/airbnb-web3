import { Button, Container, Modal, Form, Row, Col } from 'react-bootstrap';
import filters from '../Json/filters.json';
import { FcPrevious, FcNext } from 'react-icons/fc';
import { useState, useContext, useRef } from 'react';
import { MyContext } from '../pages/_app';
import { TbWorld } from 'react-icons/tb';

const FilterIcon = () => <svg viewBox="0 0 16 16" 
    xmlns="http://www.w3.org/2000/svg" 
    aria-hidden="true" role="presentation" 
    focusable="false" 
    className='d-inline-block me-2'
    height='10'>
    <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
</svg>;

const FilterModal = (props) => {

    const [type, setType] = useState([]);
    const [bedrooms, setBedrooms] = useState(null);
    const [bathrooms, setBathrooms] = useState(null);
    const [garden, setGarden] = useState(false);
    const [pool, setPool] = useState(false);
    const [jacuzzi, setJacuzzi] = useState(false);
    const [wifi, setWifi] = useState(false);

    const handleCheck = (event) => {
        let updatedList = [...type];
        if (event.target.checked) {
            updatedList = [...type, event.target.value];
        } else {
            updatedList.splice(type.indexOf(event.target.value), 1);
        }
        setType(updatedList);
    };

    const typeHouse = (value, src, text) => {
        return <>
            <input
                type='checkbox'
                id={value}
                value={value}
                className='d-none'
                onChange={handleCheck}
            />
            <label 
                htmlFor={value} 
                className='rounded-3 p-3 d-inline-flex flex-column me-3'
                role='button'
            >
                <img src={`./icons/${src}.jpeg`} alt={value} />
                <span className='mt-4'>{text}</span>
            </label>
        </>
    }

    const resetFilters = () => {
        setType([]);
        setBedrooms(null);
        setBathrooms(null);
        setGarden(false);
        setPool(false);
        setJacuzzi(false);
        setWifi(false);

        document.querySelectorAll('#typeHouse input').forEach(t => t.checked = false);
        document.querySelector('#bedrooms input').checked = true;
        document.querySelector('#bathrooms input').checked = true;
        document.querySelectorAll('#commodation input').forEach(c => c.checked = false);
    }

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="filterModal"
        centered
        >
        <Modal.Header closeButton className='d-flex justify-content-between flex-row-reverse'>
            <span>&nbsp;</span>
            <span className='fs-6 fw-bold'>Filters</span>
        </Modal.Header>
        <Modal.Body>
            <div className='border-bottom pb-5 mb-4' id='typeHouse'>
                <p className='fs-5 fw-bold mb-4'>Type de propriété</p>

                {typeHouse('house', 'typeHouse', 'Maison')}
                {typeHouse('appartment', 'typeAppartment', 'Appartement')}
                {typeHouse('hostHouse', 'typeHostHouse', "Maison d'hôtes")}
            </div>

            <div className='border-bottom pb-5 mb-4' id='nRooms'>
                <p className='fs-5 fw-bold mb-4'>Chambres et salles de bain</p>

                <div className='mb-4' id='bedrooms'>
                    <p className='mb-3'>Chambres</p>

                    <input type='radio' id='bedrooms_all' value='all' name='bedrooms' className='d-none' defaultChecked onChange={() => setBedrooms(null)} />                 
                    <label htmlFor='bedrooms_all' className='rounded-pill text-center py-2 px-4 me-2 fz14' role='button'>Tous</label>

                    <input type='radio' id='bedrooms_1' value='1' name='bedrooms' className='d-none' onChange={() => setBedrooms(1)} />
                    <label htmlFor='bedrooms_1' className='rounded-pill text-center py-2 px-4 me-2 fz14' role='button'>1</label>

                    <input type='radio' id='bedrooms_2' value='2' name='bedrooms' className='d-none' onChange={() => setBedrooms(2)} />
                    <label htmlFor='bedrooms_2' className='rounded-pill text-center py-2 px-4 me-2 fz14' role='button'>2</label>

                    <input type='radio' id='bedrooms_3' value='3' name='bedrooms' className='d-none' onChange={() => setBedrooms(3)} />
                    <label htmlFor='bedrooms_3' className='rounded-pill text-center py-2 px-4 me-2 fz14' role='button'>3</label>

                    <input type='radio' id='bedrooms_4' value='4' name='bedrooms' className='d-none' onChange={() => setBedrooms(4)} />
                    <label htmlFor='bedrooms_4' className='rounded-pill text-center py-2 px-4 me-2 fz14' role='button'>4</label>

                    <input type='radio' id='bedrooms_5' value='5' name='bedrooms' className='d-none' onChange={() => setBedrooms(5)} />
                    <label htmlFor='bedrooms_5' className='rounded-pill text-center py-2 px-4 me-2 fz14' role='button'>5</label>

                    <input type='radio' id='bedrooms_6' value='6' name='bedrooms' className='d-none' onChange={() => setBedrooms(6)} />
                    <label htmlFor='bedrooms_6' className='rounded-pill text-center py-2 px-4 me-2 fz14' role='button'>6</label>

                    <input type='radio' id='bedrooms_7' value='7' name='bedrooms' className='d-none' onChange={() => setBedrooms(7)} />
                    <label htmlFor='bedrooms_7' className='rounded-pill text-center py-2 px-4 me-2 fz14' role='button'>7</label>

                    <input type='radio' id='bedrooms_8+' value='8+' name='bedrooms' className='d-none' onChange={() => setBedrooms(8)} />
                    <label htmlFor='bedrooms_8+' className='rounded-pill text-center py-2 px-4 fz14' role='button'>8+</label>
                </div>

                <div id='bathrooms'>
                    <p className='mb-3'>Salles de bain</p>

                    <input type='radio' id='bathrooms_all' value='all' name='bathrooms' className='d-none' defaultChecked onChange={() => setBathrooms(null)} />
                    <label htmlFor='bathrooms_all' className='rounded-pill text-center py-2 px-4 me-2 fz14' role='button'>Tous</label>

                    <input type='radio' id='bathrooms_1' value='1' name='bathrooms' className='d-none' onChange={() => setBathrooms(1)} />
                    <label htmlFor='1' className='rounded-pill text-center py-2 px-4 me-2 fz14' role='button'>1</label>

                    <input type='radio' id='bathrooms_2' value='2' name='bathrooms' className='d-none' onChange={() => setBathrooms(2)} />
                    <label htmlFor='bathrooms_2' className='rounded-pill text-center py-2 px-4 me-2 fz14' role='button'>2</label>

                    <input type='radio' id='bathrooms_3' value='3' name='bathrooms' className='d-none' onChange={() => setBathrooms(3)} />
                    <label htmlFor='bathrooms_3' className='rounded-pill text-center py-2 px-4 me-2 fz14' role='button'>3</label>

                    <input type='radio' id='bathrooms_4' value='4' name='bathrooms' className='d-none' onChange={() => setBathrooms(4)} />
                    <label htmlFor='bathrooms_4' className='rounded-pill text-center py-2 px-4 me-2 fz14' role='button'>4</label>

                    <input type='radio' id='bathrooms_5' value='5' name='bathrooms' className='d-none' onChange={() => setBathrooms(5)} />
                    <label htmlFor='bathrooms_5' className='rounded-pill text-center py-2 px-4 me-2 fz14' role='button'>5</label>

                    <input type='radio' id='bathrooms_6' value='6' name='bathrooms' className='d-none' onChange={() => setBathrooms(6)} />
                    <label htmlFor='bathrooms_6' className='rounded-pill text-center py-2 px-4 me-2 fz14' role='button'>6</label>

                    <input type='radio' id='bathrooms_7' value='7' name='bathrooms' className='d-none' onChange={() => setBathrooms(7)} />
                    <label htmlFor='bathrooms_7' className='rounded-pill text-center py-2 px-4 me-2 fz14' role='button'>7</label>

                    <input type='radio' id='bathrooms_8+' value='8+' name='bathrooms' className='d-none' onChange={() => setBathrooms(8)} />
                    <label htmlFor='bathrooms_8+' className='rounded-pill text-center py-2 px-4 fz14' role='button'>8+</label>
                </div>
            </div>

            <div className='pb-5' id='commodation'>
                <p className='fs-5 fw-bold mb-4'>Équipement</p>

                <Row>
                    <Col md={6}>
                        <Form.Check type='checkbox' id='garden' label='Jardin' className='d-flex align-items-center mb-3' onChange={() => setGarden(!garden)} />
                    </Col>
                    <Col md={6}>
                        <Form.Check type='checkbox' id='pool' label='Piscine' className='d-flex align-items-center mb-3' onChange={() => setPool(!pool)} />
                    </Col>
                    <Col md={6}>
                        <Form.Check type='checkbox' id='jaccuzi' label='Jacuzzi' className='d-flex align-items-center mb-3' onChange={() => setJacuzzi(!jacuzzi)} />
                    </Col>
                    <Col md={6}>
                        <Form.Check type='checkbox' id='wifi' label='Wifi' className='d-flex align-items-center mb-3' onChange={() => setWifi(!wifi)} />
                    </Col>
                </Row>
            </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
            <Button variant='link' className='text-dark' onClick={resetFilters}>Tout effacer</Button>
            <Button variant='dark' onClick={() => console.log('test afficher')}>Afficher</Button>
        </Modal.Footer>
        </Modal>
    );
}

const Filters = () => {

    const {activeFilter, setActiveFilter, filterModalShow, setFilterModalShow} = useContext(MyContext);
    const filterCarousel = useRef();

    const [hidePrev, setHidePrev] = useState(true);
    const [hideNext, setHideNext] = useState(false);

    const filterSlide = (dir) => {
        let calc;
        dir === 'prev' ?
            (calc = filterCarousel.current.scrollLeft - filterCarousel.current.offsetWidth)
        : dir === 'next' &&
            (calc = filterCarousel.current.scrollLeft + filterCarousel.current.offsetWidth);

        filterCarousel.current.scroll({
                left: calc,
                behavior: 'smooth'
            })
    }

    const checkScroll = () => {
        filterCarousel.current.scrollLeft > 0 ? setHidePrev(false) : setHidePrev(true);
        filterCarousel.current.scrollLeft === filterCarousel.current.scrollWidth - filterCarousel.current.offsetWidth ? setHideNext(true) : setHideNext(false);
    }

    return <div className='Filter d-flex bg-white py-4'>
        <Container className='d-flex'>
            <div className='filter-container d-flex w-100 overflow-scroll me-3 position-relative'>
                <div className={`prev-next-button d-flex align-items-center position-absolute h-100 bg-white ${hidePrev ? 'd-none' : ''}`}>
                    <Button 
                        variant='link' 
                        className='d-flex justify-content-center align-items-center border bg-white rounded-circle p-0'
                        onClick={() => filterSlide('prev')}>
                        <FcPrevious />
                    </Button>
                </div>
                <div 
                    className="filter-carousel d-flex w-100 overflow-scroll"
                    onScroll={checkScroll}
                    ref={filterCarousel}>
                        <Button 
                            variant='link' 
                            className={`float-start text-decoration-none text-dark m-3 mb-0 p-0 ${activeFilter === null ? 'activeFilter' : ''}`}
                            onClick={() => setActiveFilter(null)}
                        >
                            <TbWorld />
                            <span className='d-flex flex-column pt-1'>Tous</span>
                        </Button>
                    {
                        filters.map((filter, key) => {
                            return <Button 
                                variant='link'
                                key={key}
                                className={`float-start text-decoration-none text-dark m-3 mb-0 p-0 ${activeFilter === filter.name ? 'activeFilter' : ''}`}
                                onClick={() => setActiveFilter(filter.name)}
                            >
                                <img src={filter.url} alt={filter.name} />
                                <span className='d-flex flex-column pt-1'>{filter.name}</span>
                            </Button>
                        })
                    }
                </div>
                <div className={`prev-next-button d-flex align-items-center position-absolute h-100 bg-white ${hideNext ? 'd-none' : ''}`}>
                    <Button 
                        variant='link' 
                        className='d-flex justify-content-center align-items-center border bg-white rounded-circle p-0'
                        onClick={() => filterSlide('next')}>
                        <FcNext />
                    </Button>
                </div>
            </div>

            <div className='d-flex align-items-center ms-3'>
                <Button 
                    variant='light'
                    className='d-flex align-items-center border bg-white p-3 rounded-3'
                    onClick={() => setFilterModalShow(true)}
                >
                    <FilterIcon /> Filtres
                </Button>
            </div>
        </Container>

        {filterModalShow && <FilterModal show={filterModalShow} onHide={() => setFilterModalShow(false)} />}
    </div>
}

export default Filters;