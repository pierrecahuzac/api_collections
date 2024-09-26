
import Header from './Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Layout = ({ children }) => {
  return (
    <div className=' w-screen	h-screen bg-zinc-200 text-slate-900'>
      <Header />
      {children}
      <ToastContainer />
    </div>
  );
}

export default Layout;