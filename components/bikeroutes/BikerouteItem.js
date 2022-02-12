import {useRouter} from 'next/router';

import Card from '../ui/Card';
import classes from './BikerouteItem.module.css';

function BikerouteItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/'+ props.id );
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <div>{props.city}</div>
          <div>{props.distance}</div>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default BikerouteItem;
