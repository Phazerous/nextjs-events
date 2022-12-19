import EventList from "../components/EventList";
import { getFeaturedEvents } from '../dummy-data';

export default function HomePage() {
  return (
    <div>
      <EventList items={getFeaturedEvents()} />
    </div>
  )
}