import { useRouter } from 'next/router';
import EventList from '../../components/EventList';
import EventsSearch from '../../components/EventsSearch';
import { getAllEvents } from '../../dummy-data';

export default function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
}
