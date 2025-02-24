// pages/index.tsx
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

interface HomePageProps {
  serverTime: string;
}

const AnimatedBox = dynamic(() => import('../components/AnimatedBox'), { ssr: false });

export default function Home({ serverTime }: HomePageProps) {
    return (
      <div style={{ padding: '2rem' }}>
        <h1>Next.js with Popmotion Animation</h1>
        <p>Server Time: {serverTime}</p>
        <AnimatedBox />
      </div>
    );
  }
  
  export const getServerSideProps: GetServerSideProps = async () => {
    return {
      props: {
        serverTime: new Date().toISOString(),
      },
    };
  };
