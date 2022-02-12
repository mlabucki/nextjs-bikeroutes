import BikerouteItem from './BikerouteItem';
import classes from './BikerouteList.module.css';

function BikerouteList(props) {
  return (
    <ul className={classes.list}>
      {props.bikeroutes.map((bikeroute) => (
        <BikerouteItem
          key={bikeroute.id}
          id={bikeroute.id}
          image={bikeroute.image}
          title={bikeroute.title}
          distance={bikeroute.distance}
          city={bikeroute.city}
        />
      ))}
    </ul>
  );
}

export default BikerouteList;
