import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StatusBar from './StatusBar';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';
import BackButton from './BackButton';
import { useNavigation } from '../context/NavigationContext';

const RegisterScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    username: '',
    password: ''
  });
  const [success, setSuccess] = useState(false);
  const { navigateTo } = useNavigation();

  const validateForm = () => {
    const newErrors = {
      email: '',
      username: '',
      password: ''
    };
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setSuccess(true);
      setTimeout(() => {
        navigateTo('token');
      }, 1000);
    }
  };

  const handleChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
    if (success) {
      setSuccess(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-between p-4 relative overflow-hidden">
      <ParticleBackground />
      
      <StatusBar />
      <BackButton />

      <motion.div 
        className="flex flex-col items-center gap-6 z-10 px-4 py-12 md:py-16 w-full max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-white text-4xl font-normal leading-tight font-cinzel text-center mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Create Profile
        </motion.h1>

        <motion.div
          className="w-full space-y-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="space-y-2">
            <label className="text-white text-2xl font-cinzel block">
              Email
            </label>
            <InputField
              value={formData.email}
              onChange={handleChange('email')}
              error={errors.email}
              placeholder="Enter your email"
              type="email"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white text-2xl font-cinzel block">
              Username
            </label>
            <InputField
              value={formData.username}
              onChange={handleChange('username')}
              error={errors.username}
              placeholder="Choose a username"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white text-2xl font-cinzel block">
              Password
            </label>
            <InputField
              value={formData.password}
              onChange={handleChange('password')}
              error={errors.password}
              placeholder="Create a password"
              type="password"
            />
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <SubmitButton onClick={handleSubmit} success={success} />
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default RegisterScreen;