import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
  return (
    <ul className='right'>
      {/* <li>
        <NavLink to='/'>New Project</NavLink>
      </li> */}
      <li>
        <NavLink to='/signin'>Log Out</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Log out</a>
      </li>
      {/* <li>
        <NavLink to='/'>NN</NavLink>
      </li> */}
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
