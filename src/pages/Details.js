import { useParams, Link } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import Loader from "../components/Loader";
import { getUser } from "../store/actions/usersAction";

export default function Details() {
    const {id}  = useParams();
    const dispatch = useDispatch();
    const {loader,user} = useSelector(state=>state.users)
    useEffect(( ) => {
        dispatch(getUser(id))
    },[])
  return !loader ? (
    <>
      <Link to="/" className="btn btn-dark mb-3">
        Go Back
      </Link>
      <div className="card">
        <div className="card-header">
          <h3>
            <span className="text-info">{user.name}</span>
          </h3>
        </div>
        <div className="card-body">
          <div className="row mb-2">
            <div className="col-3">Name</div>
            <div className="col-9 text-end">{user.name}</div>
          </div>
          <div className="row mb-2">
            <div className="col-3">Email</div>
            <div className="col-9 text-end">{user.email}</div>
          </div>
          <div className="row mb-2">
            <div className="col-3">Username</div>
            <div className="col-9 text-end">{user.username}</div>
          </div>
          <div className="row mb-2">
            <div className="col-3">City</div>
            <div className="col-9 text-end">{user.address.city}</div>
          </div>
          <div className="row mb-2">
            <div className="col-3">Website</div>
            <div className="col-9 text-end">{user.website}</div>
          </div>
          <div className="row mb-2">
            <div className="col-3">Phone</div>
            <div className="col-9 text-end">{user.phone}</div>
          </div>
          <div className="row mb-2">
            <div className="col-3">Company</div>
            <div className="col-9 text-end">{user.company.name}</div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loader />
  );
}
