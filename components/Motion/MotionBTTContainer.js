import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const MotionBTTContainer = ({ children, transition }) => {
    // Ref for the element
    const ref = useRef(null);

    // Track in-view status
    const isInView = useInView(ref, { once: true });
    const [hasAnimated, setHasAnimated] = useState(false);

    // Ensure animation runs only once if `once` is true
    useEffect(() => {
        if (isInView) {
            setHasAnimated(true);
        }
    }, [isInView]);

    const elementVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            ref={ref}
            variants={elementVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            transition={transition}
        >
            {children}
        </motion.div>
    );
};
