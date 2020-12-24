import React from 'react';

const UserSummary = ({ user }) => {
  return (
    <div className='project-list section'>
      <div>
        <span className='card-title'>User Name {user.money}</span>
        <button onClick={() => this.props.handleDetailModalOpen()}>
          walletを見る
        </button>
        {/* <button onClick={this.props.tipModalOpen}>送る</button> */}
      </div>
    </div>
  );
};

export default UserSummary;
