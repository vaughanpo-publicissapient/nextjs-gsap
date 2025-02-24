/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// pages/index.tsx
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

// Dynamically import LottieReact to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface HomeProps {
    message: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const message = "Hello from SSR!";
  return { props: { message } };
};

const Home = ({ message }: HomeProps) => {
    const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    import("../../public/lottie-animation.json").then((data) =>
      setAnimationData(data.default)
    );
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Lottie Animation with CSR - {message}</h1>
      <div className="w-96 h-96">
        {animationData ? <Lottie animationData={animationData} loop={true} /> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Home;
