import { useRef, useEffect } from "react";
import gsap from "gsap";
import { GetServerSideProps } from "next";

type HomeProps = {
  serverData: {
    message: string;
  };
};

export default function Home({ serverData }: HomeProps) {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.fromTo(
        boxRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 3, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Next.js with GSAP & SSR</h1>
      <div
        ref={boxRef}
        className="p-6 bg-blue-500 text-white rounded-lg shadow-lg text-lg"
      >
        {serverData.message}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  return {
    props: {
      serverData: { message: "This data was fetched on the server!" },
    },
  };
};
  