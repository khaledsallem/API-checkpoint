import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListOfUsers from './ListOfUsers';


const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';


function UserList() {

    const [data, setData] = useState({ users: [], isFetching: false });

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setData({ users: data.users, isFetching: true });
                const response = await axios.get(USER_SERVICE_URL);
                setData({ users: response.data, isFetching: false });
            } catch (e) {
                console.log(e);
                setData({ users: data.users, isFetching: false });
            }
        };
        fetchUsers();
    }, []);

    return <ListOfUsers data={data.users}
        isFetching={data.isFetching}
    />

};
export default UserList;