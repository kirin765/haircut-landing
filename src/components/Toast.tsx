'use client';

import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type?: 'info' | 'warning' | 'success' | 'error';
  duration?: number;
  onClose?: () => void;
}

export default function Toast({ message, type = 'info', duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  const bgColorMap = {
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
    success: 'bg-green-500',
    error: 'bg-red-500',
  };

  const iconMap = {
    info: '💡',
    warning: '⚠️',
    success: '✅',
    error: '❌',
  };

  return (
    <div
      className={`fixed bottom-6 right-6 ${bgColorMap[type]} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300`}
    >
      <span className="text-xl">{iconMap[type]}</span>
      <p className="font-medium">{message}</p>
    </div>
  );
}
