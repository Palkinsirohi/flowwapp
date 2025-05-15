import React from 'react';
import { BarChart2, CheckCircle, Clock, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Statistics({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;
  const completionPercentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto p-4 bg-gradient-to-br from-blue-200 to-green-400 rounded-3xl shadow-blue-400 shadow-green-400"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="overflow-hidden shadow-2xl rounded-3xl bg-gradient-to-br from-blue-200/10 to-green-400/10 backdrop-blur-sm border border-white/20">
        <div className="p-8">
          <motion.h3 
            className="text-3xl font-bold mb-6 flex items-center gap-3 text-blue-700"
            whileHover={{ x: 5 }}
          >
            <BarChart2 className="text-blue-700" size={28} />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-700">
              Task Statistics
            </span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Completion Percentage Card */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-blue-400 hover:shadow-green-400 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <PieChart className="text-blue-700" size={32} />
                <div className="text-4xl font-bold text-blue-700">
                  {completionPercentage}%
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <motion.div 
                  className="bg-gradient-to-r from-blue-600 to-green-700 h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${completionPercentage}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
              <p className="mt-2 text-gray-600">Overall Completion</p>
            </motion.div>

            {/* Completed Tasks Card */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-blue-400 hover:shadow-green-400 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <CheckCircle className="text-green-500" size={32} />
                <div className="text-4xl font-bold text-blue-700">
                  {completed}
                </div>
              </div>
              <p className="text-gray-600">Completed Tasks</p>
              {total > 0 && (
                <p className="mt-2 text-sm text-green-600">
                  {Math.round((completed / total) * 100)}% of total
                </p>
              )}
            </motion.div>

            {/* Pending Tasks Card */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-blue-400 hover:shadow-green-400 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <Clock className="text-yellow-500" size={32} />
                <div className="text-4xl font-bold text-blue-700">
                  {pending}
                </div>
              </div>
              <p className="text-gray-600">Pending Tasks</p>
              {total > 0 && (
                <p className="mt-2 text-sm text-yellow-600">
                  {Math.round((pending / total) * 100)}% of total
                </p>
              )}
            </motion.div>
          </div>

          {/* Additional Stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div 
              className="bg-white/70 p-4 rounded-xl shadow-md text-center"
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-2xl font-bold text-blue-700">{total}</p>
              <p className="text-gray-600">Total Tasks</p>
            </motion.div>
            <motion.div 
              className="bg-white/70 p-4 rounded-xl shadow-md text-center"
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-2xl font-bold text-blue-700">
                {tasks.filter(t => !t.completed && new Date(t.createdAt) < new Date(Date.now() - 86400000)).length}
              </p>
              <p className="text-gray-600">Overdue</p>
            </motion.div>
            <motion.div 
              className="bg-white/70 p-4 rounded-xl shadow-md text-center"
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-2xl font-bold text-blue-700">
                {tasks.filter(t => t.priority === 'high').length}
              </p>
              <p className="text-gray-600">High Priority</p>
            </motion.div>
            <motion.div 
              className="bg-white/70 p-4 rounded-xl shadow-md text-center"
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-2xl font-bold text-blue-700">
                {tasks.length > 0 ? Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100) : 0}%
              </p>
              <p className="text-gray-600">Completion Rate</p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
