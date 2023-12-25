import UseAuth from "./UseAuth";
import UseAxiosPublic from "./UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const UseTaskStatus = () => {
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

export default UseTaskStatus;
