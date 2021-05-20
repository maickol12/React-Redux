import { connect } from 'react-redux';
import { incrementar,decrementar,setear } from './reducers'
import './App.css';
import { Component } from 'react';

class App extends Component {
  handleSetear = () => {
    const { setear } = this.props;
    const { valor }  = this.state;
    if(valor !== ''){
      setear(Number(valor));  
    }
  }
  handleChange = e => {
     const { name, value } = e.target; 
     this.setState({ [name]: value });
  }
  render(){
    const { incrementar, decrementar, valor } = this.props;
    return (
      <div className="App">
        <p>{valor}</p>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
        <input name="valor" onChange={this.handleChange}></input>
        <button onClick={this.handleSetear}>Setear</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log({state});
  return {
    valor: state.contador
  }
}
const mapDispatchToProps = dispatch => ({
  incrementar: () => dispatch(incrementar()),
  decrementar: () => dispatch(decrementar()),
  setear: payload => dispatch(setear(payload)),
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
