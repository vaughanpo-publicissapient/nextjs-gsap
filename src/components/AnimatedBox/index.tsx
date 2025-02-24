// components/AnimatedBox.tsx
import { useEffect, useRef } from 'react';
import { animate } from 'popmotion';

export default function AnimatedBox() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      animate({
        from: 0,
        to: 100,
        onUpdate: (latest) => {
          boxRef.current!.style.transform = `translateX(${latest}px)`;
        },
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 2000,
      });
    }
  }, []);

  return (
    <div
      ref={boxRef}
      style={{ width: '50px', height: '50px', background: 'blue' }}
    ></div>
  );
}