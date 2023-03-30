// components/TaskBar.js
import React from 'react';
import styles from './Taskbar.module.css';

const TaskBar = () => {
	return (
		<div className={styles.taskBar}>
			{/* Add your TaskBar content here */}
			<h3 style={{ backgroundColor: '#444' }}>Yeezy Supply</h3>
			<h3>FootLocker Cook</h3>
			<h3>Supreme Cook</h3>
		</div>
	);
};

export default TaskBar;
