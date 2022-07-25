import React from 'react';
import classes from './LogisticsItem.module.css';

function LogisticsItem(props: {
  children: React.ReactNode;
  icon: React.FC;
}) {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
