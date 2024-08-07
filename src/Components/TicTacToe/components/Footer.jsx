import React from 'react';

function Footer({ scores }) {
  return (
    <div className="mt-8 flex flex-row justify-between text-slate-400 font-semibold" style={{ color: '#435272' }}>
      <div className="score-x text-xs text-center w-20 h-14 rounded-lg bg-cyan-500  cursor-pointer flex flex-col items-center justify-center" style={{ backgroundColor: 'turquoise' }}> X (CPU) <span className="text-base font-bold">{scores.x}</span></div>
      <div className="tie-score text-xs text-center w-20 h-14 rounded-lg bg-gray-200 cursor-pointer flex flex-col items-center justify-center">TIE<span className="text-base font-bold">{scores.ties}</span></div>
      <div className="score-o text-xs text-center w-20 h-14 rounded-lg bg-yellow-300 cursor-pointer flex flex-col items-center justify-center">O (YOU) <span className="text-base font-bold">{scores.o}</span></div>
    </div>
  );
}

export default Footer;