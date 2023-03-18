import { useRef } from "react";
import { useDispatch } from "react-redux";
import {filteredUsers} from '../store/reducers/userReducer'


export default function Filter() {
  const inputRef = useRef("");
  const dispatch = useDispatch();
  const filterUsers = () => {
    dispatch(filteredUsers(inputRef.current.value))
  }
  return (
    <>
      <input
        type="text"
        name=""
        className="form-control mb-3"
        placeholder="Search user by name"
        ref={inputRef}
        onChange ={filterUsers}
      />
    </>
  );
}
