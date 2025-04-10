import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="bcrumbs">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const pathname = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const displayName = formatBreadcrumbLabel(name);

        return isLast ? (
          <span key={pathname}> / {displayName}</span>
        ) : (
          <span key={pathname}>
            {" "}
            / <Link to={pathname}>{displayName}</Link>
          </span>
        );
      })}
    </div>
  );
};

// Helper function to format breadcrumb labels
const formatBreadcrumbLabel = (label) => {
  return label
    .replace(/([A-Z])/g, ' $1') // Add space before each uppercase letter
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between camelCase words
    .replace(/-/g, ' ') // Replace hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize first letter of each word
    .trim(); // Remove any leading/trailing spaces
};

export default Breadcrumbs;
