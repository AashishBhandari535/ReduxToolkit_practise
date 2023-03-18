import { useSelector, useDispatch } from "react-redux";
// import { useRef } from 'react'
import { useEffect } from "react";
import User from "../components/User";
import Loader from "../components/Loader";
import { getUsers } from "../store/actions/usersAction";
import { addUser } from "../store/reducers/userReducer";
import Filter from "../components/Filter";

export default function Home() {
  const { users, loader } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  // const inputRef = useRef('');
  // console.log(state.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  // const storeUser = e => {
  //     e.preventDefault();
  //     dispatch(addUser(inputRef.current.value));
  //     inputRef.current.value = '';
  // }
  //   return (
  // <form onSubmit={storeUser}>
  //     <input type="text" name='' placeholder='Add user...' ref={inputRef}/>
  //     <br />
  //     <br />
  //     <input type="submit" value='Add User'/>
  // </form>
  // <h1>List of users</h1>
  //   )
  return !loader ? (
    <>
    <Filter/>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <User key={index} index={index} user={user} />
          ))}
        </tbody>
      </table>
    </>
  ) : (
    <Loader />
  );
}
