import Swal from "sweetalert2";
import UseTasks from "../../Hooks/UseTasks";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

const Tasks = () => {
  const axiosPublic = UseAxiosPublic();
  const [createTask, loading] = UseTasks();
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/createTask/${item._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          loading();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl bg-transparent border-3 border-violet-500 mx-auto grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-x-64">
        {createTask.map((item) => (
          <div key={item._id} className="card w-56 bg-base-100 shadow-xl ">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <h2 className="card-title">{item.title}</h2>

              <p>Description:{item.description}</p>
              <p>Deadline:{item.deadline}</p>
              <p>Priority:{item.priority}</p>

              {/* <p>Status: {item.status}</p> */}

              {/* <div className="card-actions">
          <Link to="/updateClass">
            <button className="btn btn-primary">Update</button>
          </Link>
        </div> */}

              <div className="card-actions">
                <button
                  onClick={() => handleDelete(item)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </div>
              {/* <div className="card-actions">
          <Link to="/detailAssignment">
            <button
              className="btn btn-primary"
              disabled={item.status !== "approved"}
            >
              See Details
            </button>{" "}
          </Link>
        </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
