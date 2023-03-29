// Sidebar.js
import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebarIcon}>Icon 1</div>
			<div className={styles.sidebarIcon}>Icon 2</div>
			<div className={styles.sidebarIcon}>Icon 3</div>
			<div className={styles.sidebarIcon}>Icon 4</div>
		</div>
	);
};

export default Sidebar;
