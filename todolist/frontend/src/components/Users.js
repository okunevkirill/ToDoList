import React from 'react'
// ----------------------------------------------------------------------------

const UserItem = ({item}) => {
    return (
        <tr>
            <td scope={"row"}>
                {item.username}
            </td>
            <td>
                {item.firstName}
            </td>
            <td>
                {item.lastName}
            </td>
            <td>
                {item.email}
            </td>
        </tr>
    )
}


// const UserList = ({items}) => {
//     return (
//         <div className={"container"}>
//             <table className={"table table-bordered table-hover"}>
//                 <thead className={"table-light"}>
//                 <tr>
//                     <th scope={"col"}>
//                         Username
//                     </th>
//                     <th scope={"col"}>
//                         First name
//                     </th>
//                     <th scope={"col"}>
//                         Last name
//                     </th>
//                     <th scope={"col"}>
//                         Email
//                     </th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {items.map((item, index) => <UserItem item={item} key={index}/>)}
//                 </tbody>
//             </table>
//         </div>
//     )
// }


class UserList extends React.Component {
    state = {
        isLoaded: false,
        users: []
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/users/')
            .then(response => response.json())
            .then(
                (res) => {
                    this.setState({
                        isLoaded:true,
                        users: res.results
                    });
                }
            ).catch(error => console.log(error))
    }

    render() {
        return (
            <div className={"container"}>
            <table className={"table table-bordered table-hover"}>
                <thead className={"table-light"}>
                <tr>
                    <th scope={"col"}>
                        Username
                    </th>
                    <th scope={"col"}>
                        First name
                    </th>
                    <th scope={"col"}>
                        Last name
                    </th>
                    <th scope={"col"}>
                        Email
                    </th>
                </tr>
                </thead>
                <tbody>
                {this.state.users.map((item, index) => <UserItem item={item} key={index}/>)}
                </tbody>
            </table>
        </div>
        )
    }
}
// ----------------------------------------------------------------------------
export default UserList;