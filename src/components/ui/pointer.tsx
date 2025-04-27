import { motion, MotionValue, useSpring } from "motion/react";

export function Pointer({
  mouseX,
  mouseY,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const springX = useSpring(mouseX, { stiffness: 200, damping: 10 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 10 });

  return (
    <motion.div
      style={{
        position: "absolute",
        left: springX,
        top: springY,
      }}
      className="px-4 py-1 rounded-full bg-primary h-8 w-8 backdrop-blur-3xl blur-md"
    >
    </motion.div>
  );
}
