import React from 'react';

const Home: React.FC<{ navigateToDonors: () => void }> = ({ navigateToDonors }) => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Donate Blood Save Life
      </h1>
      <button
        onClick={navigateToDonors}
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Go to Donor List
      </button>
      {/* Add any other content as needed */}
    </div>
  );
};

export default Home;