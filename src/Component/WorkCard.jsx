import React from 'react'

export default function WorkCard(props) {
  return (
    <div className="p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition duration-300 w-full max-w-sm">

      <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
        <img src={props.workImg} alt="" className="w-8 h-8 object-contain" />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        {props.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {props.desc}
      </p>
    </div>
  )
}
