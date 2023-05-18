import React from 'react';


const LoadingScreen = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="w-12 h-12 bg-primary rounded-full animate-spinner-grow"></div>
    </div>
  );
};

export default LoadingScreen;
