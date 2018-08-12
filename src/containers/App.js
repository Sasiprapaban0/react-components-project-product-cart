import React, { Component } from 'react';
import { Products, Cart } from '../components'

class App extends Component {
  state = {
    products:[
      {id: 1, name: 'Product#1', amount: 10, buy: 0},
      {id: 2, name: 'Product#2', amount: 9, buy: 0},
      {id: 3, name: 'Product#3', amount: 8, buy: 0},
      {id: 4, name: 'Product#4', amount: 7, buy: 0},
      {id: 5, name: 'Product#5', amount: 6, buy: 0}
    ]
  }

  changeBuy = (id, amount) => {
    const { products } =this.state
    const index = products.findIndex( product => product.id === id )
    const product = products[index]
    this.setState({
      products:[
        ...products.slice(0, index),
        { ...product, buy: product.buy + amount },
        ...products.slice(index + 1)
      ]
    })
  }
  
      
  
  getAvailableProducts = () => {
    return this.state.products.filter(({ amount, buy}) => amount !== buy)
  }
  getProductsInCart = () => {
    return this.state.products.filter(({ buy }) => buy > 0)
  }

  reduceBuy = () => id => this.changeBuy(id, -1)
  increaseBuy =() => id => this.changeBuy(id, +1)
  render() {
    return (
      <div className="container">
        <Products
        products ={this.getAvailableProducts()}
        onAddToCart={this.increaseBuy()} />
        <Cart
         products={this.getProductsInCart()}
         onRemove={this.reduceBuy()}/>
      </div>
    );
  }
}

export default App;
