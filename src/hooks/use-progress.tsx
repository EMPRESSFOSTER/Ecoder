'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

type LessonIdentifier = string;

interface ProgressContextType {
  completedLessons: LessonIdentifier[];
  isCompleted: (topic: string, slug: string) => boolean;
  toggleLessonCompletion: (topic: string, slug: string) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'codestarter_progress';

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedLessons, setCompletedLessons] = useState<LessonIdentifier[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(LOCAL_STORAGE_KEY);
      if (item) {
        setCompletedLessons(JSON.parse(item));
      }
    } catch (error) {
      console.error('Failed to load progress from localStorage', error);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(completedLessons));
      } catch (error) {
        console.error('Failed to save progress to localStorage', error);
      }
    }
  }, [completedLessons, isLoaded]);

  const toggleLessonCompletion = useCallback((topic: string, slug: string) => {
    const lessonId: LessonIdentifier = `${topic}/${slug}`;
    setCompletedLessons(prev => {
      if (prev.includes(lessonId)) {
        return prev.filter(id => id !== lessonId);
      } else {
        return [...prev, lessonId];
      }
    });
  }, []);

  const isCompleted = useCallback((topic: string, slug: string) => {
    return completedLessons.includes(`${topic}/${slug}`);
  }, [completedLessons]);
  
  const value = useMemo(() => ({
      completedLessons,
      isCompleted,
      toggleLessonCompletion,
  }), [completedLessons, isCompleted, toggleLessonCompletion]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-background">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
