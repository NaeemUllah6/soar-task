import React from 'react';
import { Link } from 'react-router-dom'
const PageNotFound = () => {
  return (
    <div className="h-[calc(100vh-200px)] flex justify-center items-center">
      <p className='font-[600] text-[22px] text-slate-400'>404 | Requested page not Found</p>
    </div>
  );
};

export default PageNotFound;
