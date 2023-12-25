import UseAuth from "../../Hooks/UseAuth";
import { useForm } from "react-hook-form";
import UseCreate from "../../Hooks/UseCreate";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

const Create = () => {
  const { user } = UseAuth();
  const [createTask, refetch] = UseCreate();
  const { register, handleSubmit } = useForm();
  const axiosPublic = UseAxiosPublic();

  const onSubmit = (data) => {
    if (user && user.email) {
      const createTask = {
        email: user.email,
        photoURL: user.photoURL,
        occupation: data.occupation,
        status: data.status,

        name: data.name,
        title: data.title,
        description: data.description,
        deadline: data.deadline,

        priority: data.priority,
      };
      axiosPublic.post("/createTask", createTask).then((res) => {
        if (res.data.insertedId) {
          console.log("user added to the database");
          // reset();
          Swal.fire({
            title: "Assignments Added in tasks",
            showClass: {
              popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
            },
            hideClass: {
              popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
            },
          });
          refetch();
        }
      });
    }
  };

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="card shrink-0 w-full max-w-sm ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Occupation</span>
              </label>
              <input
                {...register("occupation", { required: true })}
                type="text"
                placeholder="Occupation"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Assignment</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Assignment"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                {...register("title", { required: true })}
                type="text"
                placeholder="Title"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                {...register("description", { required: true })}
                type="text"
                placeholder="Description"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                {...register("deadline", { required: true })}
                type="text"
                placeholder="Deadline"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <input
                {...register("status", { required: true })}
                type="text"
                placeholder="Status"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <select
              {...register("priority", { required: true })}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled>Select Priority</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>

            <button type="submit" className="btn btn-neutral">
              Create
            </button>
          </form>
          <div className="text-lime-500">{createTask.length} </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
