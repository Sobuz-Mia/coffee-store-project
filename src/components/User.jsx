import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const User = () => {
  const loadedUser = useLoaderData();
  const [users,setUsers] = useState(loadedUser)
  
  const handelDetate = id =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/user/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if (data.deletedCount === 1) {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                     const remaining = users.filter(user=>user._id !== id);
                     setUsers(remaining)
                  }
            })
       
        }
      })
  }

  return (
    <div>
        <h2 className="text-3xl font-semibold my-4">Users information</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>CreatedAt</th>
              <th>Last LoggedIn</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                users.map((user,index)=><tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.email}</td>
                    <td>{user.createdAt}</td>
                    <td></td>
                    <td>
                        <button onClick={()=>handelDetate(user._id)} className="btn">X</button>
                    </td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
