// Import necessary modules and components from React and Three.js libraries
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Plane from "../models/Plane";
import Bird from "../models/Bird";
import HomeInfo from "../components/HomeInfo";

function Home() {
  // Declare state variables for rotation status and current stage
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage]= useState(1);

  // Function to adjust the island's scale, position, and rotation based on screen size
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.6, 0];

    // Adjust settings for smaller screens
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      // Adjust settings for larger screens
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  // Function to adjust the plane's scale and position based on screen size
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    // Adjust settings for smaller screens
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      // Adjust settings for larger screens
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  // Use the functions to get the appropriate scale, position, and rotation values
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      {/* HomeInfo component displayed at the top center of the screen */}
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
       {currentStage && <HomeInfo currentStage={currentStage} />}
    </div>
      {/* Canvas for rendering 3D content using Three.js */}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        {/* Suspense component to handle lazy loading of components */}
        <Suspense fallback={<Loader />}>
          {/* Lights to illuminate the scene */}
          <directionalLight position={[1, 1, 1]} intensity={1.5} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000"
            intensity={0.5}
          />
          
          {/* 3D models included in the scene */}
          <Sky isRotating={isRotating} />
          <Bird />
          <Plane 
            planePosition={planePosition}
            planeScale={planeScale}
            isRotating={isRotating}
            rotation={[0, 20 ,0]}
          />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
