/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/index.tsx
import { GetServerSideProps } from "next";
import animationData from "../../public/Animation - 1740307297760.json"; // Add your Lottie JSON file
import Lottie from "lottie-react";

interface HomeProps {
  animationJson: any;
  message: string
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch animation data (this could be from an API or local file)
  return {
    props: {
      animationJson: animationData,
      message: "Hello from SSR!"
    },
  };
};

const Home = ({ animationJson, message }: HomeProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Lottie Animation with SSR - {message}</h1>
      <div className="w-96 h-96">
        <Lottie animationData={animationJson} loop={true} />
      </div>
    </div>
  );
};

export default Home;
