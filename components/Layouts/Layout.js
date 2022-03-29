export default function Layout({ children }) {
  return (
    <div className="bg-black ">
      <div className="flex items-center justify-center h-screen">
        {children}
      </div>
    </div>
  );
}
