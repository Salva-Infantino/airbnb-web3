import React, { useState } from 'react';
import { Container, Modal, Button, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { TbWorld } from 'react-icons/tb';
import { FaAngleUp, FaEthereum } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

const ModalFooter = ({showModalFooter, setShowModalFooter}) => {
    return (
        <Modal
            show={showModalFooter}
            onHide={() => setShowModalFooter(false)}
            animation={false}
            dialogClassName="m-0"
            aria-labelledby="modalFooter"
        >
            <Modal.Body className='py-5 mb-3'>
                <Button
                    variant='light'
                    className='d-flex justify-content-center align-items-center p-2 rounded-circle btn-sm closeButton'
                    onClick={() => setShowModalFooter(false)}>
                    <GrClose/>
                </Button>
                <Container>
                    <Row>
                        <Col md={3}>
                            <small className='d-flex flex-column'>
                                <span className='fw-bold'>Assistance</span>
                                <Link href='/'>
                                    <a className='text-dark fw-light mt-3'>Centre d&apos;aide</a>
                                </Link>
                                <Link href='/'>
                                    <a className='text-dark fw-light mt-3'>AirCover</a>
                                </Link>
                                <Link href='/'>
                                    <a className='text-dark fw-light mt-3'>Informations de sécurité</a>
                                </Link>
                                <Link href='/'>
                                    <a className='text-dark fw-light mt-3'>Soutenir les personnes en situation de handicap</a>
                                </Link>
                                <Link href='/'>
                                    <a className='text-dark fw-light mt-3'>Options d&apos;annulation</a>
                                </Link>
                                <Link href='/'>
                                    <a className='text-dark fw-light mt-3'>Nos mesures face au Covid-19</a>
                                </Link>
                                <Link href='/'>
                                    <a className='text-dark fw-light mt-3'>Signaler un problème de voisinage</a>
                                </Link>
                            </small>
                        </Col>
                        <Col md={3}>
                            <small className='d-flex flex-column'>
                                <span className='fw-bold'>Communauté</span>
                                <Link href='/'>
                                    <a className='text-dark fw-light mt-3'>Airbnb.org : réponse aux catastrophes</a>
                                </Link>
                                <Link href='/'>
                                    <a className='text-dark fw-light mt-3'>Soutenir les réfugiés afghans</a>
                                </Link>
                                <Link href='/'>
                                    <a className='text-dark fw-light mt-3'>Lutte contre la discrimination</a>
                                </Link>
                            </small>
                        </Col>
                        <Col md={3}>
                            <small className='d-flex flex-column'>
                                <span className='fw-bold'>Accueil de voyageurs</span>
                                <Link href='/'>
                                    <a className='text-dark fw-light mt-3'>Devenir hôte</a>
                                </Link>
                                <Link href='/'>
                                    <a className='text-dark fw-light mt-3'>AirCover pour les hôtes</a>
                                </Link>
                                <Link href='/'>
                                    <a className='text-dark fw-light mt-3'>Ressources pour les hôtes</a>
                                </Link>
                                <Link href='/'>
                                    <a className='text-dark fw-light mt-3'>Forum de la communauté</a>
                                </Link>
                                <Link href='/'>
                                    <a className='text-dark fw-light mt-3'>Accueillir de manière responsable</a>
                                </Link>
                            </small>
                        </Col>
                        <Col md={3}>
                            <small className='d-flex flex-column'>
                                <span className='fw-bold'>Airbnb</span>
                                <Link href='/'>
                                    <a className='text-dark fw-light mt-3'>Newsroom</a>
                                </Link>
                                <Link href='/'>
                                    <a className='text-dark fw-light mt-3'>En savoir plus sur les nouveautés</a>
                                </Link>
                                <Link href='/'>
                                    <a className='text-dark fw-light mt-3'>Lettre de nos fondateurs</a>
                                </Link>
                                <Link href='/'>
                                    <a className='text-dark fw-light mt-3'>Carrières</a>
                                </Link>
                                <Link href='/'>
                                    <a className='text-dark fw-light mt-3'>Investisseurs</a>
                                </Link>
                            </small>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

const Footer = () => {
    const [showModalFooter, setShowModalFooter] = useState(false);

    return (
        <footer className='fixed-bottom border-top py-2 bg-white'>
            <Container>
               <small className='d-flex justify-content-between align-items-center'>
                    <div className='fw-light'>
                        <span>&copy; {new Date().getFullYear()} Salva Infantino</span>
                        <span className='px-2'>•</span>
                        <Link href='/'>
                            <a className='text-dark'>Confidentialité</a>
                        </Link>
                        <span className='px-2'>•</span>
                        <Link href='/'>
                            <a className='text-dark'>Conditions générales</a>
                        </Link>
                        <span className='px-2'>•</span>
                        <Link href='/'>
                            <a className='text-dark'>Plan du site</a>
                        </Link>
                        <span className='px-2'>•</span>
                        <Link href='/'>
                            <a className='text-dark'>Infos sur l&apos;entreprise</a>
                        </Link>
                    </div>

                    <div className='d-flex align-items-center'>
                        <Link href='/'>
                            <a className='text-dark me-4'>
                                <TbWorld/>
                                <span className='ms-2'>Français (BE)</span>
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className='text-dark me-4'>
                                <FaEthereum/>
                                <span className='ms-2'>ETH</span>
                            </a>
                        </Link>
                        <Button variant="link" className='btn-sm text-dark p-0' onClick={() => setShowModalFooter(true)}>
                            <span className='me-2'>Assistance et ressources</span>
                            <FaAngleUp/>
                        </Button>
                        
                        {showModalFooter && <ModalFooter showModalFooter={showModalFooter} setShowModalFooter={setShowModalFooter} />}
                    </div>
               </small>
            </Container>
        </footer>
    )
}

export default Footer;