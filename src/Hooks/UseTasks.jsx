import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
import UseAuth from "./UseAuth";

const UseTasks = () => {
  const axiosPublic = UseAxiosPublic();
  const { user } = UseAuth();
  const {
    refetch,
    data: createTask = [],
    isPending: loading,
  } = useQuery({
    queryKey: ["createTask", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/createTask?email=${user.email}`);
      return res.data;
    },
  });
  return [createTask, refetch, loading];
};

export default UseTasks;
