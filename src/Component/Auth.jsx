import React from 'react'
import { Link } from 'react-router-dom'

export default function Auth({
  title,
  buttonText,
  fields,
  onSubmit,
  footerText,
  footerLink,
  footerLinkText
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="w-full max-w-md">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Discover your perfect skincare routine
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
            {title}
          </h2>

          <p className="text-gray-500 text-sm text-center mb-8">
            {title === "Welcome Back" ? "Sign in" : "Start your journey with us"}
          </p>

          <form className="space-y-5" onSubmit={onSubmit}>
            {fields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {field.placeholder}
                </label>

                <input
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent 
                  transition-all duration-200 bg-white"
                  required
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-rose-300 text-white font-semibold py-3 rounded-lg 
              hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:ring-offset-2 
              transition-all duration-200 shadow-md hover:shadow-lg mt-6"
            >
              {buttonText}
            </button>
          </form>

          {footerText && (
            <p className="mt-6 text-center text-sm text-gray-600">
              {footerText}{" "}
              <Link
                to={footerLink}
                className="text-rose-500 font-semibold hover:text-rose-600 transition-colors"
              >
                {footerLinkText}
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
