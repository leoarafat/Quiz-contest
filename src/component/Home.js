
import { useContext } from "react";
import HomeData from "./HomeData";
import { LoadContext } from "./Root";


const Home = () => {

  const receiveData = useContext(LoadContext)
// console.log(receiveData)

  return (
<div>
  {
    receiveData.map(data => <HomeData key={data.id} data={data}/>)
  }
</div>
  );
};

export default Home;
