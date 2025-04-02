import { useEffect } from "react";
import { useAchievementsData } from "./api/useAchievementsData";
import { Button } from "./components/ui/button";
import { getToken } from "./utils/localStorage";

function App() {

  const { data, isLoading } = useAchievementsData();

  useEffect(() => {
    if (!isLoading)
      console.log(data)
  }, [data])

  return (
    <>
      {
        isLoading ? <></> :
          data.map((obj: any) => (

            console.log(obj)

          ))
      }
    </>
  )
}

export default App
