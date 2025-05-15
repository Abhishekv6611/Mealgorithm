import React from 'react';

function InputSection({ setInputs, inputs }) {
  return (
    <div className="w-full max-w-2xl mt-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Age */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            placeholder="Age"
            value={inputs.age}
            onChange={(e) => setInputs(prev => ({ ...prev, age: e.target.value }))}
            className="p-2 border border-gray-300 rounded-lg shadow-sm text-center focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Height */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">Height (cm)</label>
          <input
            type="number"
            placeholder="Height"
            value={inputs.height}
            onChange={(e) => setInputs(prev => ({ ...prev, height: e.target.value }))}
            className="p-2 border border-gray-300 rounded-lg shadow-sm text-center focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Weight */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">Weight (kg)</label>
          <input
            type="number"
            placeholder="Weight"
            value={inputs.weight}
            onChange={(e) => setInputs(prev => ({ ...prev, weight: e.target.value }))}
            className="p-2 border border-gray-300 rounded-lg shadow-sm text-center focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>
    </div>
  );
}

export default InputSection;
