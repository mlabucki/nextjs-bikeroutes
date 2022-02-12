import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Bike Routes</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All BikeRoutes</Link>
          </li>
          <li>
            <Link href='/new-bikeroute'>Add New Route</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
