import React from 'react';
import { sidebarlinks } from 'data/data';
import classes from './sidebar.module.css'
import Link from 'next/link'
// /className={classes.sidebar}
const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <ul className={classes.links}>
        {sidebarlinks.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <Link href={url}>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>

  );
};

export default Sidebar;
