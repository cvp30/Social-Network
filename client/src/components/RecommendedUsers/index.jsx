import { Link } from "react-router-dom"
import Cards from "./Cards"


const RecommendedUsers = () => {
  return (
    <div className="w-72 xl:w-80 h-fit p-3 bg-default rounded-xl flex flex-col gap-3">
      <div className="w-full flex justify-between">
        <p className="font-semibold text-lg">You Might Like</p>
        <Link to="" className="text-primary font-semibold">See All</Link>
      </div>

      <hr className="w-full border border-darkSilver" />

      <Cards />

    </div>
  )
}

export default RecommendedUsers