import * as React from 'react';
import { motion, useInView } from 'framer-motion';

export function NameTypingAnimation({ text = 'Typing Effect' }: Readonly<{ text: string }>) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <h2
        ref={ref}
        className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-8xl"
      >
        {text.split('').map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            {letter}
          </motion.span>
        ))}
      </h2>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-xl font-light ml-2"
      >
        CS @ Columbia
      </motion.h2>
    </>
  );
}