// pages/index.tsx
import { motion } from "motion/react"
import { useEffect, useState } from 'react';

type Data = {
  message: string;
};

export default function Home() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    // Simulate fetching data client-side
    setTimeout(() => {
      setData({ message: "Hello from CSR!" });
    }, 500);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {data ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-white shadow-xl rounded-2xl"
        >
          <h1 className="text-2xl font-bold">{data.message}</h1>
        </motion.div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
