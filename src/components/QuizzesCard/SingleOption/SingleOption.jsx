import React from 'react';

const SingleOption = ({singleOption}) => {
     const handleAns = () =>{
          console.log('clicked')
     }

     return (
          <div>
               <button onClick={handleAns} type="button" className="px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100 w-full">{singleOption}</button>
          </div>
     );
};

export default SingleOption;