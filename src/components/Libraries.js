import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetLibraries() {
    const [member, setMember] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/all')
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
                    <li key={members.LibraryID}>
                        {members.Owners} 
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GetLibraries;
