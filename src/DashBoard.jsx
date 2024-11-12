import axios from "axios";
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./slice/UserSlice";
import Navbar from "./Navbar";

const DashBoard = () => {
const users = useSelector((state)=>state.users)

const dispatch = useDispatch();
console.log(users);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://form-be.onrender.com/api/user/allUsers"
        );
          dispatch(addUser(response.data.user))
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <Navbar />
    <div className="container mt-3">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {users.map((item, index) => {
          return (
            <div key={index}>
              <div className="col">
                <div className="card bg-dark">
                  <div className="card-body">
                    <h5 className="card-title text-warning">
                      Name: {item.username}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
   </>
  );
};

export default DashBoard;
