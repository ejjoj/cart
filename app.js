class App extends React.Component {
  state = {
    quantity: 0,
    isDisabled: true,
    isVisible: false
  }

  handleButtonClick = (type) => {
    if (type === 'increment') {
      this.setState(prevState => ({
        quantity: ++prevState.quantity,
        isDisabled: false
      }));

      if (this.state.quantity >= 9) {
        this.setState(prevState => ({
          isVisible: true
        }));
      } else {
        this.setState(prevState => ({
          isVisible: false
        }));
      }

    } else if (type === 'decrement') {

      if (this.state.quantity >= 9) {
        this.setState(prevState => ({
          isVisible: true
        }));
      } else {
        this.setState(prevState => ({
          isVisible: false
        }));
      }

      if (this.state.quantity > 0) {
        this.setState(prevState => ({
          quantity: --prevState.quantity,
          isDisabled: false
        }));
      } else {
        this.setState(prevState => ({
          isDisabled: true
        }));
        return null;
      }
    }
  }

  render() {
    return(
      <React.Fragment>
        <CartButton
          type='decrement'
          click={this.handleButtonClick}
          visible={true}
          disabled={this.state.isDisabled}
          text='-'
        />
        <p>{this.state.quantity}</p>
        <CartButton
          type='increment'
          disabled={false}
          visible={true}
          click={this.handleButtonClick}
          text='+'
        />

        <CartButton
          type='buy'
          click={this.handleButtonClick}
          disabled={false}
          visible={this.state.isVisible}
          text='Kup teraz!'
        />
      </React.Fragment>
    );
  }
}

const CartButton = (props) => {
  return (
   props.visible && <button disabled={props.disabled} onClick={() => props.click(props.type)}>{props.text}</button>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));