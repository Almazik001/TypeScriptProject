import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const UserList: React.FC = () => {
    const {error, loading, users} = useTypedSelector(state => state.users)
    const {fetchUser} = useActions()

    useEffect(() => {
        fetchUser()
    }, [])

    if (loading) {
        return <h1>Идёт загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }


    return (
        <div>
              {users.map(user => 
                    <div key={user.id} >{user.id} - {user.name}</div>
                )}
        </div>
    );
};
export default UserList;