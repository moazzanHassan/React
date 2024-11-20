import React, { useEffect, useState } from 'react';

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate the angle for rotation
      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle - 180);
    };

    // Add mousemove event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className=" w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-section data-scroll-speed="-.7" className='relative w-full h-full'>
      {/* Background Image */}
      <img
        className="absolute z-1 object-cover w-full h-full"
        src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg"
        alt="Background"
      />

      {/* Eyes */}
      <div  className="flex gap-10 absolute z-2 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        {/* Eye 1 */}
        <div className="flex justify-center items-center w-[10vw] h-[10vw] bg-zinc-100 rounded-full">
          <div className="relative w-[7vw] h-[7vw] bg-zinc-900 rounded-full">
            <div
              style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[3vw]"
            >
              <div className="flex justify-center items-center w-[3vw] h-[3vw] bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Eye 2 */}
        <div className="flex justify-center items-center w-[10vw] h-[10vw] bg-zinc-100 rounded-full">
          <div className="relative w-[7vw] h-[7vw] bg-zinc-900 rounded-full">
            <div
              style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[3vw]"
            >
              <div className="flex justify-center items-center w-[3vw] h-[3vw] bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Eyes;
