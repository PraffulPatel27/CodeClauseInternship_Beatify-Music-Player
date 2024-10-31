// import React from 'react';
// import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';

// function PlayerControls({ onPlay, onPause, onSkip, onPrevious, isPlaying }) {
//   return (
//     <div className="flex items-center justify-center gap-4">
//       <button
//         onClick={onPrevious}
//         className="text-white bg-blue-500 px-4 py-2 rounded-full"
//       >
//         <FaBackward />
//       </button>
//       {isPlaying ? (
//         <button
//           onClick={onPause}
//           className="text-white bg-red-500 px-4 py-2 rounded-full"
//         >
//           <FaPause />
//         </button>
//       ) : (
//         <button
//           onClick={onPlay}
//           className="text-white bg-green-500 px-4 py-2 rounded-full"
//         >
//           <FaPlay />
//         </button>
//       )}
//       <button
//         onClick={onSkip}
//         className="text-white bg-blue-500 px-4 py-2 rounded-full"
//       >
//         <FaForward />
//       </button>
//     </div>
//   );
// }

// export default PlayerControls;



import React from 'react';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';

function PlayerControls({ onPlay, onPause, onSkip, onPrevious, isPlaying }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={onPrevious}
        className="text-white bg-blue-500 px-4 py-2 rounded-full"
      >
        <FaBackward />
      </button>
      {isPlaying ? (
        <button
          onClick={onPause}
          className="text-white bg-red-500 px-4 py-2 rounded-full"
        >
          <FaPause />
        </button>
      ) : (
        <button
          onClick={onPlay}
          className="text-white bg-green-500 px-4 py-2 rounded-full"
        >
          <FaPlay />
        </button>
      )}
      <button
        onClick={onSkip}
        className="text-white bg-blue-500 px-4 py-2 rounded-full"
      >
        <FaForward />
      </button>
    </div>
  );
}

export default PlayerControls;