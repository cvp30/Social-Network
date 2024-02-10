import EventCard from "./EventCard"


const EventsCards = () => {

  const events = [
    {
      title: "JSON Data Meetup",
      description: "A meetup for developers interested in JSON data.",
      image: "https://media.istockphoto.com/id/1341285864/photo/football-ball-with-flags-of-world-countries-in-the-net-of-goal-of-football-stadium-world-cup.jpg?s=612x612&w=0&k=20&c=ohzjuAGs2WYMecNdQxLZ1Xetm3KJes6emxD7eHQOMAY=",
      members: 50
    },
    {
      title: "Twitter API Workshop",
      description: "Hands-on workshop on using the Twitter API.",
      image: "https://media.istockphoto.com/id/1341285864/photo/football-ball-with-flags-of-world-countries-in-the-net-of-goal-of-football-stadium-world-cup.jpg?s=612x612&w=0&k=20&c=ohzjuAGs2WYMecNdQxLZ1Xetm3KJes6emxD7eHQOMAY=",
      members: 30
    },
    {
      title: "Social Media Conference",
      description: "A conference discussing the latest trends in social media.",
      image: "https://media.istockphoto.com/id/1341285864/photo/football-ball-with-flags-of-world-countries-in-the-net-of-goal-of-football-stadium-world-cup.jpg?s=612x612&w=0&k=20&c=ohzjuAGs2WYMecNdQxLZ1Xetm3KJes6emxD7eHQOMAY=",
      members: 100
    }
  ]

  return (
    <div className="w-full h-fit flex flex-col gap-3">
      {
        events.map(event => {
          return (
            <EventCard
              key={event.title}
              title={event.title}
              description={event.description}
              image={event.image}
              members={event.members}
            />
          )
        })
      }
    </div>
  )
}

export default EventsCards