import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import EventContent from '../../components/event-detail/EventContent';
import EventLogistics from '../../components/event-detail/EventLogistics';
import EventSummary from '../../components/event-detail/EventSummary';
import { getEventById } from '../../dummy-data';
import type { DUMMY_EVENT } from '../../dummy-data';
import ErrorAlert from '../../components/ui/ErrorAlert';

const EventDetailPage: NextPage = () => {
  const router = useRouter();
  const event: DUMMY_EVENT | undefined = getEventById(router.query.eventId ? router.query.eventId.toString() : '');
  if (!router.isReady) {
    return null;
  }
  return (
    event ?
      <>
        <EventSummary title={event.title} />
        <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </>
      :
      <>
        <ErrorAlert>
          <p>No event found!</p>
        </ErrorAlert>
      </>
  )
}

export default EventDetailPage;