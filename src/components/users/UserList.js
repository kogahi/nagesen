import React from 'react';
import UserSummary from './UserSummary';

const UserList = ({ users }) => {
  return (
    <div>
      {users &&
        users.map((user) => {
          return (
            <UserSummary
              user={user}
              key={user.id}
              // handleDetailModalOpen={this.props.handleDetailModalOpen}
            />
          );
        })}
    </div>
  );
};

export default UserList;
