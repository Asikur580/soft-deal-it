import { motion } from "framer-motion";

export function DecorativePattern({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.15 }}
      transition={{ duration: 1 }}
      className={`absolute inset-0 w-full h-full ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path
          d="M 10 0 L 0 0 0 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      </pattern>
      <rect width="100" height="100" fill="url(#grid)" />
    </motion.svg>
  );
}