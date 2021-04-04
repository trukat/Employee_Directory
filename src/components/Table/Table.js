import React, {useState, useEffect} from 'react';
import userData from '../../utils/api';
import Table from 'react-bootstrap/Table'
import Search from '../Search/Search';
import "./Table.css";

function TableData(props) {
    const [users, setUsers] = useState([]);
    const [filterUsers, setFilterUsers] = useState([]);
    useEffect(() => {
        userData().then(res => {
          const persons = res.data.results;
            setUsers(persons);
            setFilterUsers(persons);
          })
      },[]);

const handleFilterChange = (e) => {
  const employeeSearch = e.target.value;
  const filteredList = users.filter(employee => {
          const selectedEmployee = employee.name.first.toLowerCase();
          return selectedEmployee.includes(employeeSearch.toLowerCase());
        })
        setFilterUsers(filteredList);
}

const handleSortingAsc = () => {
  const sortUsers = [...filterUsers];
  sortUsers.sort((a, b) => {
    if (a.name.first <= b.name.first) {
      return -1
    } else {
      return 1
    }
  })
  setFilterUsers(sortUsers);
}

const handleSortingDes = () => {
  const sortUsers = [...filterUsers];
  sortUsers.sort((a, b) => {
    if (b.name.last <= a.name.last) {
      return -1
    } else {
      return 1
    }
  })
  setFilterUsers(sortUsers);
}
      
    return (
    <>
    <Search handleFilterChange= {handleFilterChange}/>
    <Table striped bordered hover responsive>
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col"><div class="arrow-up" onClick= {handleSortingAsc}></div>First Name</th>
      <th scope="col"><div class="arrow-down" onClick= {handleSortingDes}></div>Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  {filterUsers.map((employees, index) => (
  <tbody key={index}>
    <tr>
      <td><img alt="" src={employees.picture.thumbnail}/></td> 
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
   
  </tbody>
    ))}
</Table>
</>
    )
};

export default TableData;