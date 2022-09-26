import React, {useState} from "react";

import api from "../api"
import User from "./user.jsx";

const Users = ({ users, ...rest }) => {
    // const [users, setUsers] = useState(api.users.fetchAll());

    // const handleDelete = (userId) => {
    //     setUsers(users.filter((user) => user._id !== userId));
    // };

    // const renderPhrase = (number) => {
    //     const lastOne = Number(number.toString().slice(-1));

    //     if (number > 4 && number < 15) return "Человек готовы";

    //     if ([2, 3, 4].indexOf(lastOne) >= 0) return "Человека готовы";

    //     if (lastOne === 1) return "Человек готов";
    // };

    return (
        <>
        {/* <h1><span 
            className={
                "badge bg-" + (users.length > 0 ? "primary" : "danger")
            }
        >
            {users.length > 0
            ? `${ users.length} ${renderPhrase(
                    users.length
                )} с тобой общатся`
            : "Ты один"}
        </span></h1> */}
        {users.length > 0 && (
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th/>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <User key={user._id} {...rest} {...user} />
                    // <tr key={user._id}>
                    //     <td>{user.name}</td>
                    //     <td>
                    //         {user.qualities.map(item => (
                    //             <span 
                    //                 className={
                    //                     "badge m-1 bg-" + item.color} key={item._id}
                    //             >
                    //                 {item.name}
                    //             </span>
                    //         ))}
                    //     </td>
                    //     <td>{user.profession.name}</td>
                    //     <td>{user.completedMeetings}</td>
                    //     <td>{user.rate}</td>
                    //     <td>
                    //         <button 
                    //             className={"btn btn-danger"}
                    //             onClick = {() => handleDelete(user._id)}
                    //         >
                    //             Удалить
                    //         </button>
                    //     </td>
                    // </tr>
                ))}
            </tbody>
        </table>
        )}
        </>
    )
};

export default Users;