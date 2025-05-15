import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckSquare, Square, PlusCircle, Trash2, Edit3 } from 'lucide-react';

export default function TaskList({ tasks, toggleTaskCompletion, addTask, deleteTask, editTask }) {
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleAddTask();
  };

  const startEditing = (task) => {
    setEditingId(task.id);
    setEditText(task.title);
  };

  const saveEdit = (id) => {
    editTask(id, editText);
    setEditingId(null);
  };

  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto p-4 bg-gradient-to-br from-blue-200 to-green-400 rounded-3xl shadow-blue-400 shadow-green-400"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overflow-hidden shadow-2xl rounded-3xl bg-gradient-to-br from-blue-200/10 to-green-400/10 backdrop-blur-sm border border-white/20">
        <div className="p-8">
          <motion.h3 
            className="text-3xl font-bold mb-6 flex items-center gap-3 text-blue-700"
            whileHover={{ x: 5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-700">
              My Task List
            </span>
          </motion.h3>
          
          <div className="flex gap-4 mb-6">
            <input 
              type="text" 
              value={newTask} 
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add new task..." 
              className="flex-grow bg-white/80 border-2 border-blue-300/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent shadow-sm" 
            />
            <motion.button 
              onClick={handleAddTask} 
              className="bg-gradient-to-r from-blue-500 to-green-600 text-white rounded-xl px-6 py-3 flex items-center gap-2 font-medium shadow-lg hover:shadow-blue-500 hover:shadow-green-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <PlusCircle /> Add Task
            </motion.button>
          </div>

          {tasks.length === 0 ? (
            <motion.div 
              className="text-center py-8 text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No tasks yet. Add one above!
            </motion.div>
          ) : (
            <ul className="space-y-3">
              <AnimatePresence>
                {tasks.map(task => (
                  <motion.li 
                    key={task.id}
                    layout
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group"
                  >
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/80 backdrop-blur-sm shadow-md hover:shadow-blue-400 hover:shadow-green-400 transition-all">
                      <motion.div
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleTaskCompletion(task.id)}
                        className="cursor-pointer"
                      >
                        {task.completed ? (
                          <CheckSquare className="text-green-500 w-6 h-6" />
                        ) : (
                          <Square className="text-blue-700 w-6 h-6" />
                        )}
                      </motion.div>

                      {editingId === task.id ? (
                        <div className="flex-grow flex gap-2">
                          <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="flex-grow bg-white/70 border border-blue-300/30 rounded-lg px-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
                          />
                          <button 
                            onClick={() => saveEdit(task.id)}
                            className="text-green-500 hover:text-green-700"
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        <span 
                          className={`flex-grow ${task.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}
                        >
                          {task.title}
                        </span>
                      )}

                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {!task.completed && editingId !== task.id && (
                          <motion.button
                            onClick={() => startEditing(task)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-blue-700 hover:text-green-700"
                          >
                            <Edit3 size={18} />
                          </motion.button>
                        )}
                        <motion.button
                          onClick={() => deleteTask(task.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={18} />
                        </motion.button>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          )}

          {tasks.length > 0 && (
            <motion.div 
              className="mt-6 text-sm text-gray-500 text-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {tasks.filter(t => t.completed).length} of {tasks.length} tasks completed
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
