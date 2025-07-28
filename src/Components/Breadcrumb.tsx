import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const breadcrumbMap = {
    "/": "Home",
    "/articles": "Feed",
    "/articles/:id": "Article Detail",
    "/profile": "Profile"
  };
  type BreadcrumbKey = keyof typeof breadcrumbMap;
  const breadcrumbs = pathnames.map((_, index) => {
    const to = "/" + pathnames.slice(0, index + 1).join("/");
    let label: string | undefined;
    if (pathnames.length >= 2 && pathnames[0] === "articles" && index === 1) {
      label = pathnames[1].substring(0, 15) + '...';
    } else {
      label = (to in breadcrumbMap ? breadcrumbMap[to as BreadcrumbKey] : undefined) || to.split("/").pop();
    }
    return (
      <li key={to} className="inline">
        <Link to={to} className="text-xs sm:text-sm py-2 sm:py-4 top-0 z-50 hover:underline">
          {label}
        </Link>
        {index < pathnames.length - 1 && <span className="mx-1 sm:mx-2 text-xs sm:text-sm">/</span>}
      </li>
    );
  });

  return (
    <nav className="w-full justify-start bg-stone-50 dark:bg-zinc-800">
      <ul className="flex flex-wrap items-center  space-x-1 px-2 sm:px-4 py-2 max-w-full">
        <li>
          <Link to="/" className="text-xs sm:text-sm hover:underline text-zinc-800 dark:text-stone-50">Home</Link>
          {breadcrumbs.length > 0 && <span className="mx-1 sm:mx-2 text-xs sm:text-sm">/</span>}
        </li>
        {breadcrumbs}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
