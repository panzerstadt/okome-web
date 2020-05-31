import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const CheckoutButton = () => {
  return (
    <div className="fixed bottom-0 right-0">
      <Link href="/checkout">
        <motion.button
          initial={{ width: 0 }}
          animate={{ width: "fit-content" }}
          className="h-20 mb-10 mr-10 shadow-lg"
        >
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            go to checkout
          </motion.span>
        </motion.button>
      </Link>
    </div>
  );
};
