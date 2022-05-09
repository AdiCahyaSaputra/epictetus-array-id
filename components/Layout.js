export default function Layout({children}) {
  return (
    <div className="bg-gradient-to-b 
      from-gray-600 to-gray-900 min-h-screen 
      no-scrollbar text-white">
      <div className="container mx-auto p-4">
        {children}
      </div>
    </div>
  )
}
