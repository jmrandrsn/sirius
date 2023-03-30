// App.js
import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import TaskBar from './components/taskbar';
import styles from './App.module.css';
import TaskTable from './pages/tasktable';
import Calendar from './components/Calendar';
import PageContext from './PageContext';
import NewsFeed from './components/NewsFeed';

const App = () => {
	const [activePage, setActivePage] = useState('Tasks');

	return (
		<PageContext.Provider value={{ activePage, setActivePage }}>
			<div className={styles.container}>
				<div className={styles.sidebarContainer}>
					<Sidebar />
				</div>
				<div className={styles.taskContainer}>
					<h2>Tasks</h2>
					{activePage === 'Tasks' && (
						<>
							<div className={styles.headingContainer}>
								<h2>Tasks</h2>
								<button className={styles.headingButton}>New Task</button>
							</div>
							<TaskBar />
						</>
					)}
					{activePage === 'Snkrs' && (
						<>
							<h2>Under Construction</h2>
							<NewsFeed />
						</>
					)}
					{activePage === 'Proxy' && (
						<>
							<div className={styles.headingContainer}>
								<h2>Proxy Settings</h2>
								<button className={styles.headingButton}>New Proxy</button>
							</div>
							<TaskBar />
						</>
					)}
					{activePage === 'Home' && <h2>Home Settings</h2>}
					{activePage === 'Setting' && <h2>Under Construction</h2>}
					{/* Add other page components here */}
				</div>
				<div className={styles.mainContainer}>
					<div className={styles.header}>Sirius</div>
					<div className={styles.content}>
						{activePage === 'Tasks' && (
							<>
								<h2>Current Tasks</h2>
								<TaskTable />
							</>
						)}
						{activePage === 'Snkrs' && (
							<>
								<h2>Sneaker Calendar</h2>
								<Calendar />
							</>
						)}
						{/* Add other page components here */}
					</div>
				</div>
			</div>
		</PageContext.Provider>
	);
};

export default App;
