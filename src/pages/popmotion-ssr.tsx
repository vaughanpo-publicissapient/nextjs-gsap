/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/index.tsx
import { GetServerSideProps } from 'next';
import { useEffect, useRef } from 'react';
import { animate } from 'popmotion';

interface HomePageProps {
  serverTime: string;
}

export default function Home({ serverTime }: HomePageProps) {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      animate({
        from: 0,
        to: 100,
        onUpdate: (latest: any) => {
          boxRef.current!.style.transform = `translateX(${latest}px)`;
        },
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 2000,
      });
    }
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Next.js with Popmotion Animation</h1>
      <p>Server Time: {serverTime}</p>
      <div
        ref={boxRef}
        style={{ width: '50px', height: '50px', background: 'blue' }}
      ></div>
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
