import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Edit3, Mail, User, Github, Linkedin, Twitter, Globe, Phone } from 'lucide-react';

const mockUser = {
  name: 'Palkin Sirohi',
  email: 'Palkinsirohi2011@email.com',
  phone: '9870770820',
  portfolio:'portf-teal.vercel.app/',
  github: 'github.com/palkinsirohi',
  linkedin: 'linkedin.com/in/palkin-sirohi-8ab36624a/',

  profilePicture: '/githubphoto.jpg',
  bio: 'Web developer passionate about creating beautiful, functional applications. Open to new opportunities and collaborations.'
};

export default function ProfileCard() {
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState(mockUser);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    portfolio: user.portfolio,
    github: user.github,
    linkedin: user.linkedin,
    
    bio: user.bio
  });

  const saveChanges = () => {
    setUser({ ...user, ...formData });
    setEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-200 to-green-400">
      <motion.div 
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative overflow-hidden rounded-3xl shadow-blue-400 shadow-green-400 shadow-2xl">
          {/* Background Gradient Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-green-300/30 backdrop-blur-sm"></div>
          
          {/* Card with Glass Morphism Effect */}
          <div className="relative bg-white/80 backdrop-blur-lg border border-blue-300/20 border-green-300/20">
            <div className="p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Profile Picture Section */}
              <motion.div 
                className="flex flex-col items-center z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative">
                  <motion.img 
                    src={user.profilePicture} 
                    alt="Profile" 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-400 shadow-blue-400 shadow-green-400 shadow-xl"
                    style={{ boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.6), 0 10px 25px -5px rgba(34, 197, 94, 0.6)' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-transparent hover:border-blue-400/50 hover:border-green-400/50 transition-all duration-300 pointer-events-none"></div>
                </div>
                
                {!editing && (
                  <motion.button 
                    onClick={() => setEditing(true)} 
                    className="mt-6 bg-gradient-to-r from-blue-500 to-green-600 text-white rounded-xl px-6 py-3 flex items-center gap-2 font-medium shadow-lg hover:shadow-blue-500 hover:shadow-green-600 transition-shadow"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 10px 20px -5px rgba(59, 130, 246, 0.7), 0 10px 20px -5px rgba(34, 197, 94, 0.7)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Edit3 size={18} /> Edit Profile
                  </motion.button>
                )}
              </motion.div>

              {/* Profile Info Section */}
              <div className="flex-1 w-full z-10">
                {editing ? (
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="space-y-4">
                      <div>
                        <label className="block text-blue-700 font-medium mb-1">Name</label>
                        <input 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-white/70 border border-blue-300/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent shadow-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-blue-700 font-medium mb-1">Email</label>
                        <input 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-white/70 border border-blue-300/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent shadow-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-blue-700 font-medium mb-1">Phone</label>
                        <input 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-white/70 border border-blue-300/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent shadow-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-green-700 font-medium mb-1">Website</label>
                        <input 
                          name="website"
                          value={formData.portfolio}
                          onChange={handleInputChange}
                          className="w-full bg-white/70 border border-green-300/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-transparent shadow-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-green-700 font-medium mb-1">GitHub</label>
                        <input 
                          name="github"
                          value={formData.github}
                          onChange={handleInputChange}
                          className="w-full bg-white/70 border border-green-300/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-transparent shadow-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-green-700 font-medium mb-1">LinkedIn</label>
                        <input 
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          className="w-full bg-white/70 border border-green-300/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-transparent shadow-sm"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-green-700 font-medium mb-1">Bio</label>
                      <textarea 
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full bg-white/70 border border-green-300/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-transparent shadow-sm"
                      />
                    </div>
                    <div className="md:col-span-2 flex gap-4 justify-end pt-2">
                      <motion.button 
                        onClick={() => setEditing(false)} 
                        className="bg-white/80 hover:bg-white text-blue-700 border border-blue-300/30 rounded-xl px-6 py-2 font-medium shadow-sm hover:shadow-md transition-all"
                        whileHover={{ 
                          scale: 1.03,
                          boxShadow: '0 5px 15px -3px rgba(0, 0, 0, 0.1)'
                        }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Cancel
                      </motion.button>
                      <motion.button 
                        onClick={saveChanges} 
                        className="bg-gradient-to-r from-blue-500 to-green-600 text-white rounded-xl px-6 py-2 font-medium shadow-sm hover:shadow-md transition-all"
                        whileHover={{ 
                          scale: 1.03,
                          boxShadow: '0 5px 15px -3px rgba(59, 130, 246, 0.4), 0 5px 15px -3px rgba(34, 197, 94, 0.4)'
                        }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Save Changes
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.h2 
                      className="text-3xl md:text-4xl font-bold text-blue-700 mb-3 flex items-center gap-3"
                      whileHover={{ x: 5 }}
                    >
                      <User size={28} className="drop-shadow-md" /> 
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-700">
                        {user.name}
                      </span>
                    </motion.h2>
                    
                    <p className="text-gray-700 mb-6 text-lg bg-white/70 p-4 rounded-lg shadow-inner">
                      {user.bio}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3 bg-white/70 p-3 rounded-lg shadow-sm hover:shadow-blue-400 hover:shadow-green-400 transition-shadow">
                        <Mail className="text-blue-700 drop-shadow-sm" size={20} />
                        <a href={`mailto:${user.email}`} className="hover:underline hover:text-blue-700 hover:text-green-700 transition-colors">
                          {user.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 bg-white/70 p-3 rounded-lg shadow-sm hover:shadow-blue-400 hover:shadow-green-400 transition-shadow">
                        <Phone className="text-blue-700 drop-shadow-sm" size={20} />
                        <span>{user.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/70 p-3 rounded-lg shadow-sm hover:shadow-blue-400 hover:shadow-green-400 transition-shadow">
                        <Globe className="text-blue-700 drop-shadow-sm" size={20} />
                        <a 
                          href={`https://${user.portfolio}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:underline hover:text-blue-700 hover:text-green-700 transition-colors"
                        >
                          {user.portfolio}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-8">
                      <motion.a 
                        href={`https://${user.github}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white hover:bg-white/90 px-5 py-3 rounded-xl shadow-md hover:shadow-blue-400 hover:shadow-green-400 transition-all"
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="text-blue-700" size={20} />
                        <span className="font-medium">GitHub</span>
                      </motion.a>
                      <motion.a 
                        href={`https://${user.linkedin}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white hover:bg-white/90 px-5 py-3 rounded-xl shadow-md hover:shadow-blue-400 hover:shadow-green-400 transition-all"
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Linkedin className="text-blue-700" size={20} />
                        <span className="font-medium">LinkedIn</span>
                      </motion.a>
                     
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
