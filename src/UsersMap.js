import React, { useState, useEffect } from 'react';
import axios from 'axios';


function UsersMap() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://jsonplaceholder.typicode.com/users',
            );
            setData(result.data);
        };

        fetchData();
    }, [])


    return (
        <div>
            <ol>
                {data.map(item =>
                    <li key={item.id}>
                        <p>{item.name}</p>
                    </li>
                )}
            </ol>
        </div>

    )

}


export default UsersMap;