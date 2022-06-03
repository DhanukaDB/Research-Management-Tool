import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from './nav/Nav';
const StudentUploadList = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`http://localhost:5000/api/studentUpload/`);
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/studentUpload/${id}`, {
        method: "DELETE",
      });

      const r = window.confirm ("Do you really want to Remove this Uploaded File?"); 
            if(r ==true){
              const updatedUsers = users.filter((user) => user._id !== id);
              setUsers(updatedUsers);
                }
           // }
     // if (res.ok) {

     //   const updatedUsers = users.filter((user) => user._id !== id);
     //   setUsers(updatedUsers);
    // }
    } catch (error) {
      console.log(error);
    }
  };
  return (

    <div className="container">
      <Nav/>
      <br/>
      <br/>
      <br/>
    <div className="row">
      {users?.map((user) => (
        <div className="col-md-3 card me-3 mt-2 p-0" key={user._id}>
          <img src={user.avatar} alt="" width={"100%"} height={200} />
          <div className="p-2">
            <h3>{user.name}</h3>
            <div className="d-flex justify-content-between align-items-center">
              <Link to={`/dowloadUpload/${user._id}`} style={{ textDecoration: "none" }}>
                Download
              </Link>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(user._id)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    <Link to={"/AdminSubList"}  variant="primary" type="submit" class="btn btn-outline-primary btn-lg">
          View New Submission 
    </Link>{' '}{'  '} 
    </div>
  );
};

export default StudentUploadList;