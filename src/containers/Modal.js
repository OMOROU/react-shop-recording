import React, { Component } from 'react'
import styled from 'styled-components';
import { ProduitConsumer } from './Context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';


export default class Modal extends Component {
    render() {
        return (
            <ProduitConsumer>
                {value => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, prix } = value.modalProduit;

                    if (!modalOpen) {
                        return null;
                    }
                    else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                            <h5>Produit ajouter au Panier</h5>
                                            <img src={img} className="img-fluid" alt="produit" />
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">prix : $ {prix}</h5>
                                            <Link to="/">
                                                <ButtonContainer onClick={() => closeModal()}>
                                                    shop
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer cart onClick={() => closeModal()}>
                                                    aller au panier
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        );
                    }
                }}
            </ProduitConsumer>
        );
    }
}

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.3);
display: flex;
align-items: center;
justify-content: center;
#modal {
    background: var(--mainWhite);
}
`;