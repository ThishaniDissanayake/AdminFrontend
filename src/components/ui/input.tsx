import React from 'react';

interface InputProps {
  placeholder?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, className }) => {
  return (
    <input 
      type="text" 
      placeholder={placeholder} 
      className={`px-4 py-2 border border-gray-300 rounded-md w-full ${className}`}
    />
  )
}

export default Input;
