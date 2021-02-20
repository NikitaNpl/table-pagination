import React from 'react';

export default (props) => (
    <div>
        { props.data 
        ?  <table className="table">
                <thead>
                    <tr>
                        <th onClick={props.sortHandler.bind(null, 'id')}>
                            id {props.sortField === 'id' ? <small>{props.sortDirection}</small> : ''}
                        </th>
                        <th onClick={props.sortHandler.bind(null, 'firstName')}>
                            firstName {props.sortField === 'firstName' ? <small>{props.sortDirection}</small> : ''}
                        </th>
                        <th onClick={props.sortHandler.bind(null, 'lastName')}>
                            lastName {props.sortField === 'lastName' ? <small>{props.sortDirection}</small> : ''}
                        </th>
                        <th onClick={props.sortHandler.bind(null, 'email')}>
                            email {props.sortField === 'email' ? <small>{props.sortDirection}</small> : ''}
                        </th>
                        <th onClick={props.sortHandler.bind(null, 'phone')}>
                            phone {props.sortField === 'phone' ? <small>{props.sortDirection}</small> : ''}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(item => (
                        <tr key={item.id + Math.random()}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        
        :   <small>Полей не найдено</small>
        }
        
    </div>
)