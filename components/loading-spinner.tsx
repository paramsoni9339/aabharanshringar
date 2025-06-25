export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-ivory-50 to-white">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 border-4 border-gold-200 rounded-full animate-spin border-t-gold-600"></div>

        {/* Inner ring */}
        <div className="absolute top-2 left-2 w-12 h-12 border-4 border-maroon-200 rounded-full animate-spin border-t-maroon-600 animate-reverse-spin"></div>

        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full animate-pulse"></div>
      </div>

      <div className="ml-4">
        <p className="font-playfair text-lg text-maroon-800 animate-pulse">Loading divine beauty...</p>
      </div>
    </div>
  )
}
