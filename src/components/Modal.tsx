import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ title, children, onClose }: ModalProps) => {
  return (
    <>
      <div
        className="fixed bg-black/50 top-0 right-0 left-0 bottom-0 z-10"
        onClick={onClose}
      />
      <motion.div
        className="max-w-[330px] bg-white h-1/2 max-h-[300px]  absolute bottom-32 left-0 right-0 rounded-3xl mx-auto shadow-xl z-20"
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="px-4 pt-8 pb-4 flex flex-col gap-8 h-full  relative">
          <h2 className="text-2xl">{title}</h2>
          {children}
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
