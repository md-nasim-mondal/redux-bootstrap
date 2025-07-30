import Logo from "@/assets/Logo";

const Navbar = () => {
  return (
    <nav className='max-w-7xl mx-auto h-16 flex items-center gap-3 px-5'>
      <div className='flex items-center'>
        <Logo />
        <span className='font-bold ml-2'>Task</span>
      </div>
    </nav>
  );
};

export default Navbar;
