import React from 'react';
import PropTypes from 'prop-types';
import User from './user';
// import { noConflict } from 'lodash';

const UsersTable = ({ users, onSort, currentSort, ...rest }) => {
    const hendleSort = (item) => {
        if (currentSort.iter === item) {
            onSort({
                ...currentSort,
                order: currentSort.order === 'asc' ? 'desc' : 'asc'
            });
        } else {
            onSort({ iter: item, order: 'asc' });
        }
    };
    return (
        <table className="table">
            <thead>
                <tr>
                    <th onClick={() => hendleSort('name')} scope="col">
                        Имя
                    </th>
                    <th scope="col">Качества</th>
                    <th
                        onClick={() => hendleSort('profession.name')}
                        scope="col"
                    >
                        Профессия
                    </th>
                    <th
                        onClick={() => hendleSort('completedMeetings')}
                        scope="col"
                    >
                        Встретился, раз
                    </th>
                    <th onClick={() => hendleSort('rate')} scope="col">
                        Оценка
                    </th>
                    <th onClick={() => hendleSort('bookmark')} scope="col">
                        Избранное
                    </th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <User {...rest} {...user} key={user._id} />
                ))}
            </tbody>
        </table>
    );
};

UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    currentSort: PropTypes.object.isRequired
};

export default UsersTable;
