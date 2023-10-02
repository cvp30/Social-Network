import { Community, Home, Messages, Notification, Profile, Settings } from "../icons"

export const items = [
  {
    title: 'home',
    icon: Home,
  },
  {
    title: 'community',
    icon: Community,
  },
  {
    title: 'messages',
    icon: Messages,
  },
  {
    title: 'notification',
    icon: Notification,
  },
  {
    title: 'profile',
    icon: Profile,
  },
  {
    title: 'settings',
    icon: Settings,
  },
]

export const CurrentDate = (date) => {

  const inputDate = new Date(date);
  const currentDate = new Date();

  // YEARS
  const years = currentDate.getFullYear() - inputDate.getFullYear();

  if (years) return `${years} years`

  //MONTHS
  const months = currentDate.getMonth() - inputDate.getMonth();
  if (months) return `${months} months`

  // --------------------------------------
  const difference = currentDate - inputDate
  // --------------------------------------

  //WEEKS
  const millisecondsPerWeek = 604800000;
  const weeks = Math.floor(difference / millisecondsPerWeek)

  if (weeks) return `${weeks} weeks`

  //DAYS
  const millisecondsPerDay = 86400000;
  const days = Math.floor(difference / millisecondsPerDay);

  if (days) return `${days} days`

  //HOURS
  const millisecondsPerHour = 3600000;
  const hours = Math.floor(difference / millisecondsPerHour);

  if (hours) return `${hours} hours`

  //MINUTES
  const millisecondsPerMinute = 60000;
  const minutes = Math.floor(difference / millisecondsPerMinute)

  if (minutes) return `${minutes} minutes`

  //SECONDS
  const millisecondsPerSecond = 1000;
  const seconds = Math.floor(difference / millisecondsPerSecond)

  return `${seconds} seconds`
}