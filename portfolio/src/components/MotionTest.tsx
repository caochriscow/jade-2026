import { motion } from 'framer-motion';

const MotionTest = () => {
  return (
    <div>
      <motion.ul animate={{ rotate: 360 }} />
      <motion.div
        className="p-10 w-5 bg-blue-500 mx-auto"
        animate={{ rotate: 360 }}
        transition={{ duration: 10 }}
      />
      <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className={"p-10 w-5 bg-green-500 mx-auto rounded-2xl"}
        />
      <motion.div layout />
    </div>
  )
}

export default MotionTest