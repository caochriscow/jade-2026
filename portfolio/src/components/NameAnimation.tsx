// import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

interface NameAnimationProps {
  text: string;
  className?: string;
}

export function NameAnimation({ text, className = '', }: Readonly<NameAnimationProps>) {
  const splittedText = text.split(' ');

  const pullupVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
      },
    }),
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex justify-center">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          custom={i}
          className={
            'text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-16 ' + ' pr-2 ' + className
          }
        >
          {current == '' ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}