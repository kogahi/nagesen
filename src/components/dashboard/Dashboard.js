import React, { Component } from 'react';
import UserList from '../users/UserList';
import UserDetail from '../users/UserDetail';
import Tip from '../users/Tip';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import tipReducer from '../../store/reducers/tipReducer';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      detailModalOpen: true,
      tipModalOpen: false,
    };
    this.handleDetailModalOpen = this.handleDetailModalOpen.bind(this);
  }

  handleDetailModalOpen(e) {
    this.setState({
      detailModalOpen: true,
    });
  }

  render() {
    const { auth } = this.props;
    const { users } = this.props;
    return (
      <div className='dashboard container'>
        <div>
          <UserList
            users={users}
            detaiModalChange={this.handleDetailModalOpen}
          />
        </div>

        <Modal isOpen={this.state.detailModalOpen === true ? true : false}>
          <div>
            <UserDetail users={users} />
          </div>
          <button onClick={() => this.handleChangeModal(true)}></button>
        </Modal>
        <Modal isOpen={this.state.tipModalOpen === true ? true : false}>
          <div>
            <Tip />
          </div>
          <button onClick={() => this.handleChangeModal(true)}></button>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.firestore.ordered.users,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'users' }])
)(Dashboard);
