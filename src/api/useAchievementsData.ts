import { useQuery } from "@tanstack/react-query";
import { axiosInstanceBlizzard } from "./axios";

const fetchData = async () => {
  const response = await axiosInstanceBlizzard.get('/achievement/index', {
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