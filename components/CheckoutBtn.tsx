import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const CheckoutButton = () => {
  return (
    <div className="fixed bottom-0 right-0">
      <Link href="payment">
        <motion.button
          initial={{ width: 0 }}
          animate={{ width: "fit-content" }}
          className="h-20 px-10 mb-10 mr-10 font-serif font-semibold text-black transition-colors duration-300 shadow-lg bg-yellow hover:bg-black hover:text-white"
        >
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            go to checkout
          </motion.span>
        </motion.button>
      </Link>
    </div>
  );
};
