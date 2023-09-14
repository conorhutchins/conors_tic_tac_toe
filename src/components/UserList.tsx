import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux/store';
import {incrementWins} from '../../redux/users/usersSlice';

const UserList: React.FC = () => {
//access the state
const users = useSelector((state: RootState) => state.users); // allows you to select data from redux store
    // get the dispatch function to dispatch actions
    const dispatch = useDispatch() // allows you to dispatch actions to modify the state
    return (
        <div>
          {users.map((user, index) => (
            <div key={index}>
              <p>Wins: {user.wins}</p>
              <button onClick={() => dispatch(incrementWins(index))}>Increment Wins</button>
            </div>
          ))}
        </div>
      );
    };
    
    export default UserList;