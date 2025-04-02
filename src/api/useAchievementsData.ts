import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axios";

const fetchData = async () => {
  const response = await axiosInstance.get('/achievement/index', {
    params: { namespace: "static-us", locale: "en_US" }
  });
  return response.data.achievements;
};

export function useAchievementsData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["achievementsData"],
    retry: false
  });

  return query;
}