import { useState, useEffect, useContext } from 'react';
import { SiAirbnb } from 'react-icons/si';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Container, Row, Col, Button, Dropdown, Modal } from 'react-bootstrap';
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { MyContext } from '../pages/_app';

import DatePicker from './DatePicker';
import moment from 'moment';


const ModalPets = ({showPets, setShowPets, origin}) => {
    return (
        <Modal
            show={showPets}
            onHide={() => setShowPets(false)}
            aria-labelledby="modalPets"
            className='shadow'
            centered
        >
            <Modal.Header closeButton className='border-0 pb-0'></Modal.Header>
            <Modal.Body className='p-4'>
                <img src={origin + '/img/modalPets.jpeg'} alt='Animals de compagnies' className='w-100' />
                <p className='fs-4 fw-bold mt-3'>Animaux d&apos;assistance</p>
                <p>Les animaux d&apos;assistance ne sont pas des animaux de compagnie. Il n&apos;est donc pas nécessaire de les ajouter ici.</p>
                <p>Vous voyagez avec un animal de soutien émotionnel ? Consultez notre <Link href="/"><a className='text-dark fw-bold'>politique en matière d&apos;accessibilité</a></Link>.</p>
            </Modal.Body>
        </Modal>
    )
}

const Header = () => {

    const {searchOpen, setSearchOpen, filterModalShow, origin, dateStart, dateEnd, showModalFooter} = useContext(MyContext);

    const [logged, setLogged] = useState(false);

    const [destinationOpen, setDestinationOpen] = useState(false);
    const [destination, setDestination] = useState('');

    const [dateStartOpen, setDateStartOpen] = useState(false)
    const [dateEndOpen, setDateEndOpen] = useState(false)

    const [peopleOpen, setPeopleOpen] = useState(false);
    const [adults, setAdults] = useState(0);
    const [kids, setKids] = useState(0);
    const [people, setPeople] = useState(0);
    const [babies, setBabies] = useState(0); 
    const [pets, setPets] = useState(0);

    const [showPets, setShowPets] = useState(false);

    const editSearchBox = (destination, start, end, people) => {
        setDestinationOpen(destination);
        setDateStartOpen(start);
        setDateEndOpen(end);
        setPeopleOpen(people);
    }

    const changeDestination = (e) => {
        setDestination(e.target.value);
        setDestinationOpen(false);
        setDateStartOpen(true);
    }

    const closeSearchDiv = (e) => {
        const element = document.querySelector('#big-nav-center');

        if (e.target !== element && !element.contains(e.target)) {
            editSearchBox(false, false, false);
        }
    }

    useEffect(() => {
        destinationOpen && editSearchBox(true, false, false, false);
        
    }, [destinationOpen])

    useEffect(() => {
        dateStartOpen && editSearchBox(false, true, false, false);
        
    }, [dateStartOpen])

    useEffect(() => {
        dateEndOpen && editSearchBox(false, false, true, false);
        
    }, [dateEndOpen])

    useEffect(() => {
        peopleOpen && editSearchBox(false, false, false, true);
        
    }, [peopleOpen])

    useEffect(() => {
        !searchOpen && editSearchBox(false, false, false, false);
        
    }, [searchOpen])

    useEffect(() => {
        setPeople(adults + kids);
    }, [adults, kids])

    useEffect(() => {
        setSearchOpen(false);
    }, [])

    return (
        <header
            className={`sticky-top top-0 bg-white ${showPets | filterModalShow | showModalFooter ? '' : 'z99999'}`}
            onClick={(e) => closeSearchDiv(e)}
        >
            <div className='py-3 position-relative'>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <Col sm={3}>
                            <Link href='/'>
                                <a className='d-inline-flex align-items-center text-decoration-none text-danger'>
                                    <SiAirbnb size={32} />
                                    <span className='ms-1 fs-5 fw-bold'>airbnb web3</span>
                                </a>
                            </Link>
                        </Col>
                        <Col sm={6}>
                            {
                                searchOpen ?
                                <div className='text-center menu-top-opened'>
                                    <Link href='/'>
                                        <a className='active text-dark text-decoration-none mx-3 fw-light position-relative d-inline-flex flex-column'>Logements</a>
                                    </Link>
                                    <Link href='/'>
                                        <a className='text-dark text-decoration-none mx-3 fw-light position-relative d-inline-flex flex-column'>Expériences</a>
                                    </Link>
                                    <Link href='/'>
                                        <a className='text-dark text-decoration-none mx-3 fw-light position-relative d-inline-flex flex-column'>Expériences en ligne</a>
                                    </Link>
                                </div>
                                : <div className='text-center'>
                                    <div className='fz14 border rounded-pill p-2 d-inline-flex justify-content-center align-items-center shadow-sm' 
                                        role='button'
                                        onClick={() => setSearchOpen(true)}>
                                        <div className='d-inline-flex px-3 py-1 border-end'>N&apos;importe où</div>
                                        <div className='d-inline-flex px-3 py-1 border-end'>Une semaine</div>
                                        <div className='d-inline-flex fw-light text-muted px-3 py-1'>Ajouter des voyageurs</div>
                                        <div className='text-white bg-danger rounded-circle d-flex justify-content-center align-items-center p-2'><BiSearch/></div>
                                    </div>
                                </div>
                            }
                        </Col>
                        <Col sm={3}>
                            <div className='d-flex justify-content-end'>
                                {
                                    logged ?
                                    <>
                                        <Dropdown>
                                            <Dropdown.Toggle 
                                                variant="danger" 
                                                id="dropdown-basic"
                                                className='rounded-pill text-white btn-sm'>
                                                Addresse connectée: x0djbs...euzbdo
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu align="end" className='rounded-3 border-0 shadow mt-2 w-100' style={{zIndex: '99999'}}>
                                                <Dropdown.Item href="" className='fw-light py-2 fz14'>Ajouter un bien</Dropdown.Item>
                                                <Dropdown.Item href="" className='fw-light py-2 fz14'>Mes logements</Dropdown.Item>
                                                <Dropdown.Item href="" className='fw-light py-2 fz14'>Mes locations</Dropdown.Item>
                                                <Dropdown.Item href='/account/favorites' className='fw-light py-2 fz14'>Mes favoris</Dropdown.Item>
                                                <Dropdown.Item href="" className='fw-light py-2 fz14'>Ma trésorie</Dropdown.Item>
                                                <Dropdown.Divider/>
                                                <Dropdown.Item onClick={() => setLogged(false)} className='fw-light py-2 fz14'>Se déconnecter</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </>
                                    :
                                        <Button variant='danger' className='rounded-pill text-white btn-sm' onClick={() => setLogged(true)}>Connecter votre wallet</Button>
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={`searchOpenDiv border-bottom position-absolute bg-white ${!searchOpen && 'overflow-hidden'}`}
                style={{height: searchOpen ? '82px' : '0px'}}>
                <Container>
                    <Row className='justify-content-center align-items-center pb-3'>
                        <Col sm={8} id='big-nav-center'>
                            <Row>
                                <div className={`fz14 border rounded-pill d-inline-flex justify-content-center align-items-center w-100 p-0 position-relative ${destinationOpen | dateStartOpen | dateEndOpen | peopleOpen && 'bg-secondary'}`}>
                                    <Col sm={4} className='position-relative'>
                                        <div className={`searchBox rounded-pill ${destinationOpen && 'shadow bg-white'}`}
                                            role='button'
                                            onClick={() => setDestinationOpen(true)}>
                                            <div>
                                                <p className='fw-bold m-0'>Destination</p>
                                                {
                                                    destination ? 
                                                    <p className='m-0'>{destination}</p> : 
                                                    <p className='fw-lighter text-muted m-0'>Recherchez des destinations</p>
                                                }
                                            </div>
                                        </div>

                                        {
                                            destinationOpen &&
                                            <div className='myModal position-absolute start-0 bg-white p-5 mt-3 shadow' id='modalDestination'>
                                                <span className='fw-bold'>Recherche par région</span>
                                                <Row className='mt-4'>
                                                    <Col md={4} className='mb-4'>
                                                        <div>
                                                            <input type="radio" id="flexible" name="destination" value="Je suis flexible" className='d-none'
                                                            onChange={(e) => changeDestination(e)} />
                                                            <label htmlFor="flexible" className='d-flex flex-column'>
                                                                <img src={origin + '/img/world.jpeg'} alt='Je suis flexible' />
                                                                <span className='my-2'>Je suis flexible</span>
                                                            </label>
                                                        </div>
                                                    </Col>
                                                    <Col md={4} className='mb-4'>
                                                        <div>
                                                            <input type="radio" id="usa" name="destination" value="États-Unis" className='d-none'
                                                            onChange={(e) => changeDestination(e)} />
                                                            <label htmlFor="usa" className='d-flex flex-column'>
                                                                <img src={origin + '/img/usa.webp'} alt='États-Unis' />
                                                                <span className='my-2'>États-Unis</span>
                                                            </label>
                                                        </div>
                                                    </Col>
                                                    <Col md={4} className='mb-4'>
                                                        <div>
                                                            <input type="radio" id="france" name="destination" value="France" className='d-none'
                                                            onChange={(e) => changeDestination(e)} />
                                                            <label htmlFor="france" className='d-flex flex-column'>
                                                                <img src={origin + '/img/france.webp'} alt='France' />
                                                                <span className='my-2'>France</span>
                                                            </label>
                                                        </div>
                                                    </Col>
                                                    <Col md={4}>
                                                        <div>
                                                            <input type="radio" id="italy" name="destination" value="Italy" className='d-none'
                                                            onChange={(e) => changeDestination(e)} />
                                                            <label htmlFor="italy" className='d-flex flex-column'>
                                                                <img src={origin + '/img/italy.webp'} alt='Italy' />
                                                                <span className='my-2'>Italy</span>
                                                            </label>
                                                        </div>
                                                    </Col>
                                                    <Col md={4}>
                                                        <div>
                                                            <input type="radio" id="asia" name="destination" value="Asie" className='d-none'
                                                            onChange={(e) => changeDestination(e)} />
                                                            <label htmlFor="asia" className='d-flex flex-column'>
                                                                <img src={origin + '/img/asia.webp'} alt='Asie' />
                                                                <span className='my-2'>Asie</span>
                                                            </label>
                                                        </div>
                                                    </Col>
                                                    <Col md={4}>
                                                        <div>
                                                            <input type="radio" id="africa" name="destination" value="Afrique" className='d-none'
                                                            onChange={(e) => changeDestination(e)} />
                                                            <label htmlFor="africa" className='d-flex flex-column'>
                                                                <img src={origin + '/img/africa.webp'} alt='Afrique' />
                                                                <span className='my-2'>Afrique</span>
                                                            </label>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        }
                                    </Col>
                                    <Col sm={2}>
                                        <div className={`searchBox rounded-pill ${dateStartOpen && 'shadow bg-white'}`}
                                            role='button'
                                            onClick={() => setDateStartOpen(true)}>
                                            <div>
                                                <p className='fw-bold m-0'>Arrivée</p>
                                                {
                                                    dateStart ? 
                                                    <p className='m-0'>{moment(dateStart).format('MMM DD')}</p> : 
                                                    <p className='fw-lighter text-muted m-0'>Quand ?</p>
                                                }
                                            </div>
                                        </div>

                                        {
                                            dateStartOpen &&
                                            <div className='myModal position-absolute start-0 bg-white p-5 mt-3 shadow w-100 text-center' id='modalDateEnd'>
                                                <DatePicker nextOpen={setDateEndOpen} range='start' />
                                            </div>
                                        }
                                    </Col>
                                    <Col sm={2}>
                                        <div className={`searchBox rounded-pill ${dateEndOpen && 'shadow bg-white'}`}
                                            role='button'
                                            onClick={() => setDateEndOpen(true)}>
                                            <div>
                                                <p className='fw-bold m-0'>Arrivée</p>
                                                {
                                                    dateEnd ? 
                                                    <p className='m-0'>{moment(dateEnd).format('MMM DD')}</p> :
                                                    <p className='fw-lighter text-muted m-0'>Quand ?</p>
                                                }
                                            </div>
                                        </div>

                                        {
                                            dateEndOpen &&
                                            <div className='myModal position-absolute start-0 bg-white p-5 mt-3 shadow w-100 text-center' id='modalDateEnd'>
                                                <DatePicker nextOpen={setPeopleOpen} range='end' />
                                            </div>
                                        }
                                    </Col>
                                    <Col sm={4} className='position-relative'>
                                        <div className={`searchBox rounded-pill d-flex justify-content-between align-items-center position-relative ${peopleOpen && 'shadow bg-white'}`}
                                            role='button'
                                            onClick={() => setPeopleOpen(true)}>
                                            <div>
                                                <p className='fw-bold m-0'>Voyageurs</p>
                                                {
                                                    people > 0 ?
                                                    <p className='m-0' id='who' style={{width: destinationOpen | dateStartOpen | dateEndOpen | peopleOpen ? '80px' : '150px'}}>
                                                        {people} voyageur{people > 1 && 's'}
                                                        {
                                                            babies > 0 &&
                                                            `, ${babies} bébé${babies > 1 ? 's' : ''}`
                                                        }
                                                        {
                                                            pets > 0 &&
                                                            `, ${pets} anima${pets > 1 ? 'ux' : 'l'} de compagnie${pets > 1 ? 's' : ''}`
                                                        }
                                                    </p> :
                                                    <p className='fw-lighter text-muted m-0'>Qui ?</p>
                                                }
                                            </div>
                                            <Button variant='danger'
                                                className={`
                                                    ${destinationOpen | dateStartOpen | dateEndOpen | peopleOpen && 'bg-gradient'}
                                                    text-white rounded-pill border-0 d-flex justify-content-center align-items-center position-absolute
                                                `}>
                                                <BiSearch/>
                                                {
                                                    destinationOpen | dateStartOpen | dateEndOpen | peopleOpen ? 
                                                    <span className='ms-1'>Recherche</span> : null
                                                }
                                            </Button>
                                        </div>

                                        {
                                            peopleOpen &&
                                            <div className='myModal position-absolute end-0 bg-white p-5 pb-3 mt-3 shadow' id='modalPeople'>
                                                <div className='d-flex justify-content-between align-items-center pb-4 border-bottom'>
                                                    <div>
                                                        <p className='mb-1 fw-bold'>Adultes</p>
                                                        <p className='m-0 fw-light text-muted fz14'>13 ans et plus</p>
                                                    </div>
                                                    <div className='d-flex justify-content-center align-items-center'>
                                                        <Button variant='outline-secondary' disabled={adults === 0 ? true : false} className='rounded-circle d-flex justify-content-center align-items-center bg-white p-0'
                                                            onClick={() => setAdults(adults-1)}>
                                                            <AiOutlineMinus />
                                                        </Button>

                                                        <span className='mx-3 d-flex justify-content-center align-items-center'>{adults}</span>

                                                        <Button variant='outline-secondary' disabled={people > 15 ? true : false} className='rounded-circle d-flex justify-content-center align-items-center bg-white p-0'
                                                            onClick={() => setAdults(adults+1)}>
                                                            <AiOutlinePlus />
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className='d-flex justify-content-between align-items-center py-4 border-bottom'>
                                                    <div>
                                                        <p className='mb-1 fw-bold'>Enfants</p>
                                                        <p className='m-0 fw-light text-muted fz14'>De 2 à 12 ans</p>
                                                    </div>
                                                    <div className='d-flex justify-content-center align-items-center'>
                                                        <Button variant='outline-secondary' disabled={kids === 0 ? true : false} className='rounded-circle d-flex justify-content-center align-items-center bg-white p-0'
                                                            onClick={() => setKids(kids-1)}>
                                                            <AiOutlineMinus />
                                                        </Button>

                                                        <span className='mx-3 d-flex justify-content-center align-items-center'>{kids}</span>

                                                        <Button variant='outline-secondary' disabled={people > 15 ? true : false} className='rounded-circle d-flex justify-content-center align-items-center bg-white p-0'
                                                            onClick={() => setKids(kids+1)}>
                                                            <AiOutlinePlus />
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className='d-flex justify-content-between align-items-center py-4 border-bottom'>
                                                    <div>
                                                        <p className='mb-1 fw-bold'>Bébés</p>
                                                        <p className='m-0 fw-light text-muted fz14'>Moins de 2 ans</p>
                                                    </div>
                                                    <div className='d-flex justify-content-center align-items-center'>
                                                        <Button variant='outline-secondary' disabled={babies === 0 ? true : false} className='rounded-circle d-flex justify-content-center align-items-center bg-white p-0'
                                                            onClick={() => setBabies(babies-1)}>
                                                            <AiOutlineMinus />
                                                        </Button>

                                                        <span className='mx-3 d-flex justify-content-center align-items-center'>{babies}</span>

                                                        <Button variant='outline-secondary' disabled={babies === 5 ? true : false} className='rounded-circle d-flex justify-content-center align-items-center bg-white p-0'
                                                            onClick={() => setBabies(babies+1)}>
                                                            <AiOutlinePlus />
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className='d-flex justify-content-between align-items-center py-4'>
                                                    <div>
                                                        <p className='mb-1 fw-bold'>Animaux domestiques</p>
                                                        <Button variant='link' className='w-100 text-start text-muted p-0 border-0 fz14'
                                                            onClick={() => {setShowPets(true); setPeopleOpen(false)}}>Vous voyagez avec un animal d&apos;assistance ?
                                                        </Button>
                                                    </div>
                                                    <div className='d-flex justify-content-center align-items-center'>
                                                        <Button variant='outline-secondary' disabled={pets === 0 ? true : false} className='rounded-circle d-flex justify-content-center align-items-center bg-white p-0'
                                                            onClick={() => setPets(pets-1)}>
                                                            <AiOutlineMinus />
                                                        </Button>

                                                        <span className='mx-3 d-flex justify-content-center align-items-center'>{pets}</span>

                                                        <Button variant='outline-secondary' disabled={pets === 5 ? true : false} className='rounded-circle d-flex justify-content-center align-items-center bg-white p-0'
                                                            onClick={() => setPets(pets+1)}>
                                                            <AiOutlinePlus />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </Col>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

            <ModalPets showPets={showPets} setShowPets={setShowPets} origin={origin} />
        </header>
    )
}

export default Header;