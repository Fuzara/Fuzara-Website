"use client";

import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { motion } from "framer-motion";
import { CopyIcon, WalletIcon, ActivityIcon, ArrowRightIcon } from "lucide-react";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const BudgetTrackerAnimation = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container} 
      initial="hidden" 
      animate="show" 
      className="flex flex-col space-y-2 h-full w-full justify-center p-4 bg-[#0B0C0E] rounded-xl border border-white/10"
    >
      {[
        { title: "Netflix Subscription", amount: "-$15.99", date: "Today" },
        { title: "AWS Hosting", amount: "-$120.50", date: "Yesterday" },
        { title: "Upwork Payout", amount: "+$1,250.00", date: "Mon" }
      ].map((transaction, i) => (
        <motion.div 
          key={i} 
          variants={item}
          className="flex justify-between items-center bg-white/5 p-2 rounded-lg text-sm"
        >
          <div className="flex flex-col">
            <span className="text-white font-medium">{transaction.title}</span>
            <span className="text-neutral-400 text-xs">{transaction.date}</span>
          </div>
          <span className={`${transaction.amount.includes("+") ? "text-emerald-400" : "text-white"}`}>
            {transaction.amount}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export function CashCraftPreview() {
  const items = [
    {
      title: "Autonomous Tracking",
      description: "AI automatically categorizes your multi-account expenses seamlessly.",
      header: <BudgetTrackerAnimation />,
      className: "md:col-span-2",
      icon: <ActivityIcon className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Multi-Account Sync",
      description: "Connect APIs directly via Plaid or manual CSV parsing.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <WalletIcon className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Export & Share",
      description: "One-click CSV/PDF exports for your accountant.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <CopyIcon className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Explore the Gold Standard",
      description: "Unlock precision engineering with Fuzara Dev toolkit.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <ArrowRightIcon className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-5xl mx-auto p-4 z-20 relative"
    >
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </motion.div>
  );
}
