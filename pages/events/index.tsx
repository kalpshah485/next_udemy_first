import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { DUMMY_EVENT, getAllEvents } from '../../dummy-data';

const Events: NextPage = () => {
  const events: DUMMY_EVENT[] = getAllEvents();

  const router = useRouter();

  function findEventsHandler(year: string | undefined, month: string | undefined) {
    const fullpath = `/events/${year}/${month}`;

    router.push(fullpath);
  }
  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  )
}

export default Events;