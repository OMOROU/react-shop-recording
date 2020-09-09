import React, { Component } from 'react'
import { storeProduits, detailProduit } from '../containers/Data';
const ProduitContext = React.createContext();
//Provider
//Consumer


class ProduitProvider extends Component {
    state = {
        produits: [],
        detailProduit: detailProduit,
        cart: [],
        modalOpen: false,
        modalProduit: detailProduit,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0

    };
    componentDidMount() {
        this.setProduits();
    }

    setProduits = () => {
        let tempProduits = [];
        storeProduits.forEach(item => {
            const singleItem = { ...item };
            tempProduits = [...tempProduits, singleItem];
        });
        this.setState(() => {
            return { produits: tempProduits };
        });
    }

    getItem = id => {
        const produit = this.state.produits.find(item => item.id === id);
        return produit;
    };

    handleDetail = id => {
        const produit = this.getItem(id);
        this.setState(() => {
            return { detailProduit: produit };
        });
    };

    addToCart = id => {
        let tempProduits = [...this.state.produits];
        const index = tempProduits.indexOf(this.getItem(id));
        const produit = tempProduits[index];
        produit.inCart = true;
        produit.count = 1;
        const prix = produit.prix;
        produit.total = prix;
        this.setState(() => {
            return {
                produits: tempProduits, cart: [...this.state.cart,
                    produit]
            };
        },
            () => { this.addTotals(); });
    };


    openModal = id => {
        const produit = this.getItem(id);
        this.setState(() => {
            return { modalProduit: produit, modalOpen: true };
        });
    };
    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false };
        });
    };
    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduit = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduit);
        const produit = tempCart[index];

        produit.count = produit.count + 1;
        produit.total = produit.count * produit.prix;

        this.setState(() => { return { cart: [...tempCart] } },
            () => { this.addTotals(); })
    };
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduit = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduit);
        const produit = tempCart[index];
        produit.count = produit.count - 1;

        if (produit.count === 0) {
            this.removeItem(id);
        }
        else {
            produit.total = produit.count * produit.prix;
            this.setState(
                () => {
                    return { cart: [...tempCart] };
                },
                () => {
                    this.addTotals();
                }
            );
        }

    };
    removeItem = (id) => {
        let tempProduits = [...this.state.produits];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProduits.indexOf(this.getItem(id));
        let removedProduit = tempProduits[index];
        removedProduit.inCart = false;
        removedProduit.count = 0;
        removedProduit.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                produits: [...tempProduits]
            };
        },
            () => {
                this.addTotals();
            }
        );


    };
    clearCart = (id) => {
        this.setState(() => {
            return { cart: [] };
        }, () => {
            this.setProduits();
            this.addTotals();
        });
    };
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total

            }
        })
    }

    render() {
        return (
            <ProduitContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart
                }}>
                {this.props.children}
            </ProduitContext.Provider>
        );
    }
}

const ProduitConsumer = ProduitContext.Consumer;



export { ProduitProvider, ProduitConsumer };