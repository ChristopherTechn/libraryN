import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Member() {
    const [member, setMember] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/allmembers')
            .then(response => {
                setMember(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the Members list!", error);
            });
    }, []);

    return (
        <div className="Members">
            <h1>Members List</h1>
            <ul>
                {member.map(members => (
                    <li key={members.MemberID}>
                        {members.Name} 
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Member;
