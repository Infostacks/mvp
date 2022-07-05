import Link from "next/link";
import useAuth from "../../hooks/useAuth";
import styles from '../../styles/Global.js'

const header = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="flex flex-row items-center justify-between h-20 w-full">
      <h1 className="ml-5 text-2xl font-bold text-white tracking-widest">
        <Link href="/">
          <a className="text-violet-900">CANDLEFISH</a>
        </Link>
      </h1>
      <div className="mr-10 text-md font-semibold flex items-center gap-5">
        <Link href="/">
          <a className="text-slate-800 hover:text-xl hover:underline hover:text-violet-900">
            Home
          </a>
        </Link>
        <Link href="">
          <a className="text-slate-800 hover:text-xl hover:underline hover:text-violet-900">
            Pages
          </a>
        </Link>
        <Link href="">
          <a className="text-slate-800 hover:text-xl hover:underline hover:text-violet-900">
            Services
          </a>
        </Link>
        <Link href="">
          <a className="text-slate-800 hover:text-xl hover:underline hover:text-violet-900">
            Blog
          </a>
        </Link>
        <Link href="/contactus">
          <a className="text-slate-800 hover:text-xl hover:underline hover:text-violet-900">
            Contact Us
          </a>
        </Link>
        <a
          className={`text-violet-700 rounded-full drop-shadow-xl px-5 py-2 hover:text-xl ${styles.buttonHover}`}
          onClick={handleLogout}
        >
          Logout
        </a>
      </div>
    </div>
  );
};

export default header;
