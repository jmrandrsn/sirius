// Sidebar.js
import React, { useContext } from 'react';
import styles from './Sidebar.module.css';
import PageContext from '../PageContext';

const Sidebar = () => {
	const { setActivePage } = useContext(PageContext);

	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebarIcon} onClick={() => setActivePage('Home')}>
				Home
			</div>
			<div
				className={styles.sidebarIcon}
				onClick={() => setActivePage('Snkrs')}
			>
				Snkrs.
			</div>
			<div
				className={styles.sidebarIcon}
				onClick={() => setActivePage('Tasks')}
			>
				Tasks
			</div>
			<div
				className={styles.sidebarIcon}
				onClick={() => setActivePage('Proxy')}
			>
				Proxy
			</div>
			<div
				className={styles.sidebarIcon}
				onClick={() => setActivePage('Accnt')}
			>
				Accnt
			</div>
			<div
				className={styles.sidebarIcon}
				onClick={() => setActivePage('Setting')}
			>
				Setting
			</div>
		</div>
	);
};

export default Sidebar;
