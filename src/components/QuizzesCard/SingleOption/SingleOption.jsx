import React from 'react';

const SingleOption = ({singleOption, handleCorrectAns}) => {



     return (
          <div>
               <button onClick={()=>handleCorrectAns(singleOption)}  type="button" className="px-8 py-3 font-semibold rounded bg-gray-700 hover:bg-gray-800 text-gray-100 w-full">{singleOption}</button>
          </div>
     );
};

export default SingleOption;