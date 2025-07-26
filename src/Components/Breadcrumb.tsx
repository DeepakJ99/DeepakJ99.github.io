import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
    const breadcrumbMap = {
    "/": "Feed",
    "/articles" : "Articles",
    "/articles/:id": "Article Detail",
    "/profile": "Profile"
    };
    type BreadcrumbKey = keyof typeof breadcrumbMap;
    const breadcrumbs = pathnames.map((_, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");
        const label = (to in breadcrumbMap ? breadcrumbMap[to as BreadcrumbKey] : undefined) || to.split("/").pop();
        return (
        <li key={to} className="inline">
            <Link to={to} className="text-blue-600 hover:underline">
            {label}
            </Link>
            {index < pathnames.length - 1 && <span className="mx-2">/</span>}
        </li>
        );
    });

  return (
    <nav className="my-4">
      <ul className="flex items-center space-x-1">
        <li>
          <Link to="/" className="text-blue-600 hover:underline">Feed</Link>
          {breadcrumbs.length > 0 && <span className="mx-2">/</span>}
        </li>
        {breadcrumbs}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
