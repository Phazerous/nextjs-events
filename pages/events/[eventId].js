import { useRouter } from 'next/router';
import { Fragment } from 'react';

import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventConent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';

export default function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>There is no such event</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.imageAlt}
      />
      <EventConent>
        <p>{event.description}</p>
      </EventConent>
    </Fragment>
  );
}
