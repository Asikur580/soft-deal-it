import { motion } from "framer-motion";

export function BlobPattern({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.1, scale: 1 }}
      transition={{ duration: 1 }}
      className={`absolute ${className}`}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M42.8,-62.9C54.9,-54.3,63.7,-41.1,69.4,-26.5C75.1,-11.9,77.7,4.1,73.7,18.1C69.7,32.1,59.2,44.1,46.5,52.5C33.8,60.9,19,65.7,3.4,66.9C-12.2,68.1,-28.6,65.7,-41.9,57.5C-55.2,49.3,-65.4,35.3,-70.8,19.3C-76.2,3.3,-76.8,-14.7,-70.1,-29.4C-63.4,-44.1,-49.4,-55.5,-35,-62.1C-20.6,-68.7,-5.8,-70.5,6.9,-68.8C19.6,-67.1,30.7,-71.5,42.8,-62.9Z"
        transform="translate(100 100)"
      />
    </motion.svg>
  );
}