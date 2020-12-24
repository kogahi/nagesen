import React, { Component } from 'react';
import UserSummary from './UserSummary';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const UserDetail = (props) => {
  const { user } = props;
  if (user) {
    return (
      <div className='container section project-details'>
        <div className='card z-depth-0'>
          <div className='card-content'>
            <span className='card-title'>{user.firstName}さんの残高</span>
          </div>
          <div>
            <span>{user.money}円</span>
            　　<button>閉じる</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='container center'>
        <p>Loaging project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  const id = ownProps.users;
  const users = state.firestore.data.users;
  const user = users ? users[id] : null;
  return {
    user: user,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'users' }])
)(UserDetail);
