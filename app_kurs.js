class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 1,
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

  render() {
    return (
      <div>
        <button disabled={!this.state.shoppingCart} onClick={this.handleRemoveFromCart}>-</button>
        <span> {this.state.shoppingCart} </span>
        <button disabled={this.state.shoppingCart === this.state.availableProducts} onClick={this.handleAddToCart}>+</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));