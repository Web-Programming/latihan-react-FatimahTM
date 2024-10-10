import { Link } from "react-router-dom";

export default function Page({ params }) {
  return(
    <div>
        <h1>Hallo {params.name}</h1>
        <h2> Your ID is : {params.id}</h2>
    </div>

  ) 
}