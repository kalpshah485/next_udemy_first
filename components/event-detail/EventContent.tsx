import classes from './EventContent.module.css';

function EventContent(props:{
  children: React.ReactNode
}) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
