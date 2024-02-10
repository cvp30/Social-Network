import { Dots } from "../../icons"
import EventsCards from "./EventsCards"


const RecentEvents = () => {
  return (
    <div className="w-72 xl:w-80 h-fit p-3 bg-default rounded-xl flex flex-col gap-4">

      <div className="w-full h-fit flex justify-between items-center">
        <p className="font-semibold text-lg">Recent Events</p>
        <Dots />
      </div>

      <hr className="w-full border border-darkSilver" />

      <EventsCards />

    </div>
  )
}

export default RecentEvents