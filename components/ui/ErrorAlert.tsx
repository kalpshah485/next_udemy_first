import classes from './ErrorAlert.module.css';

function ErrorAlert(props:{
  children: React.ReactNode
}) {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
