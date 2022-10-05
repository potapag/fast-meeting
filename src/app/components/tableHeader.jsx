import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const hendleSort = (item) => {
        if (selectedSort.iter === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === 'asc' ? 'desc' : 'asc'
            });
        } else {
            onSort({ iter: item, order: 'asc' });
        }
    };

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].iter
                                ? () => hendleSort(columns[column].iter)
                                : undefined
                        }
                        {...{ role: columns[column].iter && 'button' }}
                        scope="col"
                    >
                        {columns[column].name}
                    </th>
                ))}

                {/* <th scope="col">Качества</th>
                <th onClick={() => hendleSort('profession.name')} scope="col">
                    Профессия
                </th>
                <th onClick={() => hendleSort('completedMeetings')} scope="col">
                    Встретился, раз
                </th>
                <th onClick={() => hendleSort('rate')} scope="col">
                    Оценка
                </th>
                <th onClick={() => hendleSort('bookmark')} scope="col">
                    Избранное
                </th>
                <th /> */}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
