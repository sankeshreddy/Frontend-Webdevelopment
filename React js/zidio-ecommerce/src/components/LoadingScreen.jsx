import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-yellow-400 text-2xl font-bold">
      <div className="flex flex-col items-center gap-4 animate-pulse">
        <i className="fas fa-spinner fa-spin text-4xl" />
      </div>
    </div>
  );
};

export default LoadingScreen;
