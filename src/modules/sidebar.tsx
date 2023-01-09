import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { SvgIcon } from "../components/svg-icon";
import { useDynamicSvgImportProps } from "../components/svg-icon/useDynamicSvgImport";

interface MenuiItem {
  title: string;
  icon: useDynamicSvgImportProps["iconName"];
  link: string;
}

const meniItems: MenuiItem[] = [
  {
    title: "Dashboard",
    icon: "Squares2X2Icon",
    link: "/",
  },
  {
    title: "Teams",
    icon: "UserGroupIcon",
    link: "/team-members",
  },
  {
    title: "Workers",
    icon: "WrenchIcon",
    link: "/workers",
  },
  {
    title: "Occurrences",
    icon: "TableCellsIcon",
    link: "/occurrences",
  },
  {
    title: "Attendance",
    icon: "ClockIcon",
    link: "/attendances",
  },
];

export const Sidebar = () => {
  let { pathname } = useLocation();
  return (
    <aside className="hidden lg:block border-r-0.5">
      <div className="py-5 px-4">
        <Logo className="w-10 h-10 inline-block" />
      </div>
      <div className="menu-items-container">
        <ul className="space-y-1 px-2">
          {meniItems.map(({ icon, title, link }) => (
            <Link to={link} key={link + title} className="block">
              <li
                className={`group py-2.5 px-2.5 text-sm tracking-wide font-medium transition-colors flex gap-2 items-center hover:bg-indigo-50 ${
                  link === pathname && "bg-indigo-50"
                }`}
              >
                <SvgIcon
                  className={`h-5 w-5 group-hover:fill-indigo-600 group-hover:stroke-indigo-600 ${
                    link === pathname && "fill-indigo-600 stroke-indigo-600"
                  }`}
                  iconName={icon}
                  iconType="solid"
                />
                <span
                  className={`group-hover:text-indigo-600 ${
                    link === pathname && "text-indigo-600"
                  }`}
                >
                  {title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </aside>
  );
};
