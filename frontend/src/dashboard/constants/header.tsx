const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand header-responsive bg-darks static-top bg-sky-700 h-14">
        <div className="flex items-center justify-between px-4">
          <button
            type="button"
            className="block sm:hidden text-white"
            id="sidebarToggle"
          >
            <i className="fas fa-bars"></i>
          </button>
          <h1 className="text-white text-xl font-bold">
            <a href="https://demoscad.net/demoscad/portal/user/Dashboard">
              Sky<span className="text-red-500">TOP</span> CONSTRUCT USER PANEL
            </a>
          </h1>
          <div className="hidden sm:block">
            {/* Add any additional content you want to display on larger screens */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;