import { useDrag, useDrop } from "react-dnd";
import UseTaskStatus from "../../Hooks/UseTaskStatus";

import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";

const TaskStatus = () => {
  const [createTask, loading] = UseTaskStatus();
  const axiosPublic = UseAxiosPublic();

  const handleDropToDo = async (item) => {
    try {
      const response = await axiosPublic.patch(`/createTask/${item.id}`, {
        status: "to-do",
      });
      //   console.log("Updated ", response.data);
      if (response.data) {
        loading();
      }

      Swal.fire({
        title: "Updated to todo, Please, Reload the page",
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
    } catch (error) {
      console.error(error);
    }
  };

  const handleDropCompleted = async (item) => {
    try {
      const response = await axiosPublic.patch(`/createTask/${item.id}`, {
        status: "completed",
      });
      if (response.data) {
        loading();
      }
      Swal.fire({
        title: "Updated to completed, Please, Reload the page",
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
    } catch (error) {
      console.error(error);
    }
  };
  const handleDropOngoing = async (item) => {
    try {
      const response = await axiosPublic.patch(`/createTask/${item.id}`, {
        status: "ongoing",
      });
      if (response.data) {
        loading();
      }
      Swal.fire({
        title: "Updated to ongoing, Please, Reload the page",
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
    } catch (error) {
      console.error(error);
    }
  };
  const [, dropToDo] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => handleDropToDo(item),
  }));

  const [, dropOngoing] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => handleDropOngoing(item),
  }));

  const [, dropCompleted] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => handleDropCompleted(item),
  }));

  const DraggableTask = ({ task }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: "TASK",

      item: { id: task._id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));
    console.log(isDragging);
    const opacity = isDragging ? 0.5 : 1;

    return (
      <div ref={drag} style={{ opacity, cursor: "move" }}>
        <p>{task.name}</p>
      </div>
    );
  };

  const todoTasks = createTask.filter((task) => task.status === "to-do");
  const ongoingTasks = createTask.filter((task) => task.status === "ongoing");
  const completedTasks = createTask.filter(
    (task) => task.status === "completed"
  );
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>To-Do</th>
              <th>OnGoing</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td ref={dropToDo}>
                {todoTasks.map((task) => (
                  <DraggableTask key={task._id} task={task} />
                ))}
              </td>
              <td ref={dropOngoing}>
                {ongoingTasks.map((task) => (
                  <DraggableTask key={task._id} task={task} />
                ))}
              </td>
              <td ref={dropCompleted}>
                {completedTasks.map((task) => (
                  <DraggableTask key={task._id} task={task} />
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskStatus;
