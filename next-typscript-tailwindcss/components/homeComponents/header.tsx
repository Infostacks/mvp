import Link from "next/link";
import useAuth from "../../hooks/useAuth";

const header = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="flex flex-row items-center justify-between h-20 w-full drop-shadow-xl bg-slate-300">
      <h1 className="ml-5 text-2xl font-bold text-white tracking-widest">
        <Link href="/">
          <a>CANDLEFISH</a>
        </Link>
      </h1>
      <div className="mr-10 font-semibold text-lg flex items-center gap-5">
        <Link href="/">
          <a className="text-slate-700 hover:text-xl hover:underline hover:text-orange-400">
            Home
          </a>
        </Link>
        <Link href="">
          <a className="text-slate-700 hover:text-xl hover:underline hover:text-orange-400">
            Pages
          </a>
        </Link>
        <Link href="">
          <a className="text-slate-700 hover:text-xl hover:underline hover:text-orange-400">
            Services
          </a>
        </Link>
        <Link href="">
          <a className="text-slate-700 hover:text-xl hover:underline hover:text-orange-400">
            Blog
          </a>
        </Link>
        <Link href="/contactus">
          <a className="text-slate-700 hover:text-xl hover:underline hover:text-orange-400">
            Contact Us
          </a>
        </Link>
        <a
          className="text-slate-700 bg-rose-500 rounded-full drop-shadow-xl pl-5 pt-2 pb-2 pr-5 hover:text-xl hover:bg-rose-600"
          onClick={handleLogout}
        >
          Logout
        </a>
      </div>
    </div>
  );
};

export default header;
