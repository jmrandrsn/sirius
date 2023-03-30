// components/TaskTable.js
import React from 'react';
import styles from './Tasktable.module.css';

const TaskTable = () => {
	return (
		<div className={styles.taskTable}>
			<table className={styles.table}>
				{/* Add your table headers and rows with dummy information here */}
				<thead>
					<tr>
						<th>Site</th>
						<th>Product</th>
						<th>Size</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Nike</td>
						<td>Air Jordan 1</td>
						<td>10</td>
						<td>Success</td>
					</tr>
					<tr>
						<td>Yeezy Supply</td>
						<td>Yeezy Foamrunner 350</td>
						<td>10</td>
						<td>Success</td>
					</tr>
					<tr>
						<td>FootLocker</td>
						<td>Air Jordan 3</td>
						<td>10</td>
						<td>Success</td>
					</tr>
					<tr>
						<td>Shopify</td>
						<td>Nike Air Foamposite "Crimson"</td>
						<td>9.5</td>
						<td>Success</td>
					</tr>
					{/* Add more rows as needed */}
				</tbody>
			</table>
		</div>
	);
};

export default TaskTable;
