import Header from "./Header";

export default function Layout({ children }) {
  return (
      <div className="flex h-screen px-12 text-white bg-black ">
        <Header />
        {children}
      </div>
  );
}
