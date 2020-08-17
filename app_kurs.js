class App extends React.Component {

  state = {
    availableProducts: 7,
    shoppingCart: 0,
  }

  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: --this.state.shoppingCart
    });
  }

  handleAddToCart = () => {
    this.setState({
      shoppingCart: ++this.state.shoppingCart
    });
  }

  handleBuy = () => {
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shoppingCart,
      shoppingCart: 0,
    });
  }

  render() {
    const {shoppingCart, availableProducts} = this.state;
    const style = this.state.shoppingCart === 0 ? {opacity: 0.3} : {};

    return (
      <div>
        <button disabled={!shoppingCart} onClick={this.handleRemoveFromCart}>-</button>
        <span style={style}> {shoppingCart} </span>
        <button disabled={shoppingCart === availableProducts} onClick={this.handleAddToCart}>+</button>
        {shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));