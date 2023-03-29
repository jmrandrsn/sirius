// App.js
import React from 'react';
import Sidebar from './components/sidebar';
import styles from './App.module.css';

const App = () => {
	return (
		<div className={styles.container}>
			<div className={styles.sidebarContainer}>
				<Sidebar />
			</div>
			<div className={styles.mainContainer}>
				<div className={styles.header}>IFYKYK</div>
				<div className={styles.content}>
					{/* Add your current tasks content here */}
					<h2>Current Tasks</h2>
				</div>
			</div>
		</div>
	);
};

export default App;
