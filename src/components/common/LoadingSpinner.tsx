import React from 'react'

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      <span className="ml-4 text-gray-600 font-semibold">Carregando...</span>
    </div>
  )
}

export default LoadingSpinner


