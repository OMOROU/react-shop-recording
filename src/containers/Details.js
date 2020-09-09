import React, { Component } from 'react'
import { ProduitConsumer } from '../containers/Context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProduitConsumer>
                {value => {
                    const { id, companie, img, info, prix, title, inCart } = value.detailProduit;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 ">
                                    <img src={img} className="img-fluid" alt="produit" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2> model : {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Companie : <span className="text-uppercase">{companie}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            prix : <span>$</span>
                                            {prix}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        A Propos :
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/* buttons */}

                                    <div>

                                        <Link to="/">
                                            <ButtonContainer>Retour Au Produits</ButtonContainer>

                                        </Link>

                                        <ButtonContainer cart disabled={inCart ? true : false} onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>
                                            {inCart ? "inCart" : "Ajouter Au Panier"}
                                        </ButtonContainer>

                                    </div>
                                </div>

                            </div>
                        </div>

                    );
                }}
            </ProduitConsumer>
        )
    }
}
