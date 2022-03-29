export default function Layout({ children }) {
  return (
    <div className="px-12 bg-black">
      <div className="flex items-center justify-center h-screen text-white">
        {children}
      </div>
    </div>
  );
}
