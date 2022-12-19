import EventList from '../../components/EventList';
import { getAllEvents } from '../../dummy-data';

export default function AllEventsPage() {
  return (
    <div>
      <EventList items={getAllEvents()} />
    </div>
  );
}
