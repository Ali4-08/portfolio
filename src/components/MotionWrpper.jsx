import { motion } from "framer-motion";

export default function MotionWrapper({children, className = ''}){
    return(
        <motion.div
        initial={{opacity: 0, y: 65}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.3}}
        transition={{
            duration: 1,            
            ease: "easeOut"
        }}
        className={className}
        >
            {children}
        </motion.div>
    )
}