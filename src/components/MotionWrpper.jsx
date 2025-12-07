import { motion } from "framer-motion";

export default function MotionWrapper({children, className = '', delay = 0}){
    return(
        <motion.div
        initial={{opacity: 0, y: 60}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.3}}
        transition={{
            duration: 0.6,
            delay: delay,
            ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className={className}
        >
            {children}
        </motion.div>
    )
}