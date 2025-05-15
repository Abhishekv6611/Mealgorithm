import React, { useEffect, useRef } from 'react'

function GenerateBox({output,loading}) {
  // Remove unwanted markdown syntax (###, **, ---)
  const sanitizedOutput = output
    ? output.replace(/[#*_|\-]/g, '') // Regex to remove Markdown syntax like `**`, `###`, `---`
    : "Welcome to Mealgorithm";
    return (
    <>
        <div className=" w-full max-w-3xl h-96 rounded-lg shadow-md flex items-center justify-center mb-6">
  <div className="w-full h-full p-4 overflow-y-auto text-black bg-white">
    <h1 className="text-xl font-semibold mb-4 overflow-hidden whitespace-pre-wrap break-words">
      {loading?"Generating......":sanitizedOutput }
    </h1>
  </div>
</div>

    
    </>
  )
}

export default GenerateBox
