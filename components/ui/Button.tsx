import Link from 'next/link'
import React from 'react'
import { UrlObject } from 'url';
import classes from './Button.module.css';

export default function Button(
  props: {
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    link?: string | UrlObject;
    children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
  }
) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    )
  }
    return <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
}
