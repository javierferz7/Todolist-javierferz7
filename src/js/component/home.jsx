import { array } from "prop-types";
import React, { useState } from "react";


//create your first component
const Home = () => {
	
	const [task, setTask] = useState("");
	
	const [saveTask, setSaveTask] = useState([]);

	
	function handleTask(event) {
		setTask(event.target.value)
	}
	
	function handleTaskList(event) {
		if (event.key == "Enter") {
			if (task.trim() !== "") {
				setSaveTask([...saveTask, task.trim()])
				setTask("");
			}
		}
	}
	
	function handleDelete(index) {
		let filterTask = saveTask.filter((item, indexFilter) => index !== indexFilter)
		setSaveTask(filterTask)
	}
	return (

		<div className="container d-flex flex-column justify-content-center">
			<h1 className="text-center display-2 text-primary">TODOS</h1>
			<div className="row justify-content-center">
				<div className="col-6 text-center">
					<input onChange={handleTask} value={task} onKeyDown={handleTaskList} className="w-100 rounded border-light fs-4 text-secondary " placeholder="Añadir Tarea" />
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-6 ">
					<ol className="list-unstyled fs-4 ">
						
						{
							saveTask.map((item, index) => {
								return (<li className="border-bottom mt-2 ms-0  d-flex justify-content-between" key={index}>
									<span className="text-secondary ">{item}</span> <i onClick={() => handleDelete(index)} className="fas fa-times text-danger"></i> </li>)
							})
							
						}
					</ol>
					
					<p className="text-secondary ">
						{saveTask.length > 0 ? `There are ${saveTask.length} task.` : `There are no task`}
					</p>
				</div>
			</div>

		</div>
	);
};

export default Home;