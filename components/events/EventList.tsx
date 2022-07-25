import React from 'react';
import EventItem from './EventItem';
import classes from './EventList.module.css';
import type { DUMMY_EVENT } from '../../dummy-data';

export default function EventList({ items } : {
  items: DUMMY_EVENT[]
}) {
  return (
    <ul className={classes.list}>
      {
        items.map((item) => <EventItem 
          key={item.id}
          id={item.id}
          title={item.title}
          location={item.location}
          date={item.date}
          image={item.image}       // {...item} 
        />)
      }
    </ul>
  )
}
