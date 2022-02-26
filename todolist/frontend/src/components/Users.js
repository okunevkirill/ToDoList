/**
 * Модуль работы с API для пользователя
 */

import React from 'react'
import './apiTodolist.css'

/**
 * Функция получения html кода для переданного пользователя
 * @param user
 * @returns {JSX.Element}
 * @constructor
 */
const UserItem = ({user}) => {
    return (
        <tr>
            <td>
                {user.username}
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )
}

/**
 * Функция получения html кода для списка пользователей
 * @param users - список объекта типа пользователь
 * @returns {JSX.Element}
 * @constructor
 */
const UserList = ({users}) => {
    return (
        <table>
            <th>
                USERNAME
            </th>
            <th>
                FIRST NAME
            </th>
            <th>
                LAST NAME
            </th>
            <th>
                EMAIL
            </th>
            {users.map((user) => <UserItem user={user}/>)}
        </table>
    )
}

export default UserList;