import React from "react";
import "./TaskList.css";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";
import plus_icon from "../../img/plus-icon.svg";

export default function TaskList({ 
  title,
  taskState, 
  onAddTask, 
  tasks, 
  onTaskUpdate,
  onDeleteTask 
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.key} 
              id={task.id} 
              title={task.title} 
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask} 
            />
          );
        })}
        { tasks.length === 0 && <div className="empty-list">Lista Vazia</div> }
        <button onClick={addTask} className="btn">
          <img src={plus_icon} alt="plus-button"/>
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
