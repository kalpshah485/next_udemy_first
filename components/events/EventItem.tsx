import React from 'react';
import Button from '../ui/Button';
import DateIcon from '../icons/DateIcon';
import classes from './EventItem.module.css';
import AddressIcon from '../icons/AddressIcon';
import ArrowRightIcon from '../icons/arrowRightIcon';

export default function EventItem({ title, image, date, location, id }: {
  id: string;
  title: string;
  // description: string;
  location: string;
  date: string;
  image: string;
  // isFeatured: boolean;
}) {

  const localDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{localDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>
              Explore Event
            </span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}