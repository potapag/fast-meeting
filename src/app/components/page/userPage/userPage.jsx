import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
import api from '../../../api';
// import Qualities from '../../ui/qualities';
import UserCard from '../../ui/userCard';
import QualitiesCard from '../../ui/qualitiesCard';
import MeetingsCard from '../../ui/meetingsCard';
import Comments from '../../ui/comments';

const UserPage = ({ userId }) => {
    // const history = useHistory();
    const [user, setUsers] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUsers(data));
    }, []);
    // const handleClick = () => {
    //     history.push(history.location.pathname + '/edit');
    // };

    if (user) {
        return (
            <div className="container">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <UserCard user={user} />
                        <QualitiesCard data={user.qualities} />
                        <MeetingsCard value={user.completedMeetings} />
                    </div>
                    <div className="col-md-8">
                        <Comments />
                    </div>
                </div>
            </div>

            //     <div>
            //         <h1>{user.name}</h1>
            //         <h2>Профессия: {user.profession.name}</h2>
                    // <Qualities qualities={user.qualities} />
            //         <p>Завершенных встреч: {user.completedMeetings}</p>
            //         <h2>Оценка: {user.rate} </h2>
            //         <button onClick={handleClick}>Изменить</button>
            //     </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

UserPage.propTypes = { userId: PropTypes.string.isRequired };

export default UserPage;
