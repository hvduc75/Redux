import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect } from "react";

function TableUser(props) {
  const [listUser, setListUser] = useState([]);
  const fetchAllUser = async () => {
    const res = await axios.get("http://localhost:8080/users/all");
    const data = res && res.data ? res.data : [];
    setListUser(data);
  };

  useEffect(() => {
    fetchAllUser();
  }, []);

  const handleDeleteUser = (item) => {
    console.log(item);
  };

  return (
    <>
      <Container>
        <hr />
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listUser &&
              listUser.length > 0 &&
              listUser.map((item, index) => {
                return (
                  <tr key={`user-${index}`}>
                    <td>{index + 1}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteUser(item)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default TableUser;
