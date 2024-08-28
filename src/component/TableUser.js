import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../action/actions";

function TableUser(props) {
  // const [, setListUser] = useState([]);

  // const fetchAllUser = async () => {
  //   const res = await axios.get("http://localhost:8080/users/all");
  //   const data = res && res.data ? res.data : [];
  //   setListUser(data);
  // };
  const dispatch = useDispatch();
  const listUser = useSelector((state) => state.user.listUsers);
  const isLoading = useSelector((state) => state.user.isLoading);
  const isError = useSelector((state) => state.user.isError);

  useEffect(() => {
    // fetchAllUser();
    dispatch(fetchAllUsers());
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
            {isError === true ? (
              <>
                <div>something wrongs, please try again...</div>
              </>
            ) : (
              <>
                {isLoading === true ? (
                  <>
                    <div>Loading data...</div>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default TableUser;
