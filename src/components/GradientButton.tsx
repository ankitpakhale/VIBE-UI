import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white rounded-xl overflow-hidden group bg-black"
    >
      <span className="absolute inset-0 animate-[gradientFlow_5s_linear_infinite] bg-[length:300%_300%] bg-gradient-to-r from-[#FF8A8A] via-[#B88AFF] to-[#34FFDA] opacity-70" />
      <span className="relative z-10">{children}</span>
      <style>
        {`
          @keyframes gradientFlow {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </button>
  );
};

export default GradientButton;
