import type { NextPage } from 'next';
import { getFilteredEvents } from '../../dummy-data';
// import type { DUMMY_EVENT } from '../../dummy-data';
import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/ErrorAlert';

const FilteredEventsPage: NextPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid Filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link='/events'>Show all events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <>
      <ErrorAlert>
        <p>No events found for the chosen filter!</p>
      </ErrorAlert>
    </>
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  )
}

export default FilteredEventsPage;