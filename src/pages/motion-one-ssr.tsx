import { motion } from "motion/react"
import { GetServerSideProps } from 'next';

type Props = {
  data: {
    message: string;
  };
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // Example: Fetch data from an API (this runs server-side)
  const data = { message: "Hello from SSR!" };
  return { props: { data } };
};

export default function Home({ data }: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-6 bg-white shadow-xl rounded-2xl"
      >
        <h1 className="text-2xl font-bold">{data.message}</h1>
      </motion.div>
    </div>
  );
}
