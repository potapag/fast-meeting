import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import api from '../../../api';
import Qualities from '../../ui/qualities';

const UserPage = ({ userId }) => {
    const history = useHistory();
    const [user, setUsers] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUsers(data));
    });
    const handleClick = () => {
        history.push('/users');
    };

    if (user) {
        return (
            <div>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <Qualities qualities={user.qualities} />
                <p>Завершенных встреч: {user.completedMeetings}</p>
                <h2>Оценка: {user.rate} </h2>
                <button onClick={handleClick}>Все пользователи</button>
            </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

UserPage.propTypes = { userId: PropTypes.string.isRequired };

export default UserPage;
