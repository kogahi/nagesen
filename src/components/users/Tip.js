import React, { Component } from 'react';
import { connect } from 'react-redux';
import { execTip } from '../../store/actions/tipActions';

class Tip extends Component {
  state = {
    pay_amount: '',
  };
  handleChange = (e) => {
    this.setState({ pay_amount: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.execTip(this.state);
  };

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <h5>自分の残高{}</h5>

          <div className='input-field'>
            <input
              id='content'
              className='materialize-textarea'
              onChange={this.handleChange}
            ></input>
          </div>
          <div className='input-field'>
            <button>送る</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    execTip: (tip) => dispatch(execTip(tip)),
  };
};

export default connect(null, mapDispatchToProps)(Tip);
