// App.js
import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import TaskBar from './components/taskbar';
import styles from './App.module.css';
import TaskTable from './pages/tasktable';
import PageContext from './PageContext';

const App = () => {
	const [activePage, setActivePage] = useState('Tasks');

	return (
		<PageContext.Provider value={{ activePage, setActivePage }}>
			<div className={styles.container}>
				<div className={styles.sidebarContainer}>
					<Sidebar />
				</div>
				<div className={styles.taskContainer}>
					{activePage === 'Tasks' && (
						<>
							<h2>Tasks</h2>
							<TaskBar />
						</>
					)}
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
						{/* Add other page components here */}
					</div>
				</div>
			</div>
		</PageContext.Provider>
	);
};

export default App;
