import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
import UseAuth from "./UseAuth";

const UseCreate = () => {
  const axiosPublic = UseAxiosPublic();
  const { user } = UseAuth();
  const { refetch, data: createTask = [] } = useQuery({
    queryKey: ["createTask", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/createTask?email=${user.email}`);
      return res.data;
    },
  });
  return [createTask, refetch];
};

export default UseCreate;
