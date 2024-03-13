import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

const UserList: React.FC = () => {
    const state = useTypedSelector(state => state.user)
    console.log(state)
    return (
        <div>
                      
        </div>
    );
};
export default UserList;