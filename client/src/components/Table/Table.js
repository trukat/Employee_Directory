import React, {useState, useEffect} from 'react';
import userData from '../../utils/api';
import Table from 'react-bootstrap/Table'

function TableData() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userData().then(res => {
          const persons = res.data.results;
          console.log("hi", persons)
            setUsers( persons );
          })
          // console.log(users)

      },[]);
      
    return (
    <Table striped bordered hover responsive>
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
  {users.map((employees) => (
    <>
    <tr scope="col">
      <td><img src={employees.picture.thumbnail}/></td> 
      <td>
      {employees.name.first}
      </td>
      <td>
      {employees.name.last}
      </td>
      <td>
      {employees.email}
      </td>
      <td>
      {employees.phone}
      </td>
    </tr>
    </>
  ))}     
  </tbody>
</Table>
    )
}

export default TableData;