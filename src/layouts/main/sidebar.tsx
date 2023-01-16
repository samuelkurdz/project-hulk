import { A, useLocation } from "@solidjs/router";
import { createEffect } from "solid-js";
import { CustomIcon, IconProps } from "../../components/icon";
import { Logo } from "../../components/Logo";

interface MenuiItem {
  title: string;
  icon: IconProps["iconName"];
  link: string;
}

const meniItems: MenuiItem[] = [
  {
    title: "Dashboard",
    icon: "squares_2x2",
    link: "/",
  },
  {
    title: "Teams",
    icon: "userGroup",
    link: "/teams",
  },
  {
    title: "Workers",
    icon: "wrench",
    link: "/workers",
  },
  {
    title: "Occurrences",
    icon: "tableCells",
    link: "/occurrences",
  },
  {
    title: "Attendance",
    icon: "clock",
    link: "/attendances",
  },
];

export const Sidebar = () => {
  const location = useLocation();
  createEffect(() => {
    console.log(location.pathname);
  });

  return (
    <aside class="hidden lg:block border-r-0.5 py-3">
      <div class="py-5 px-4">
        <Logo class="w-8 h-8 inline-block" />
      </div>
      <div class="menu-items-container">
        <ul class="space-y-1 px-2">
          {meniItems.map(({ icon, title, link }) => (
            <A href={link} class="block">
              <li
                class={`group py-2.5 px-2.5 text-sm tracking-wide font-medium transition-colors flex gap-2 items-center hover:bg-indigo-50 ${
                  link === location.pathname && "bg-indigo-50"
                }`}
              >
                <CustomIcon
                  iconType="solid"
                  class={`h-4 w-4 group-hover:fill-indigo-600 group-hover:stroke-indigo-600 ${
                    link === location.pathname &&
                    "fill-indigo-600 stroke-indigo-600"
                  }`}
                  iconName={icon}
                />
                <span
                  class={`group-hover:text-indigo-600 ${
                    link === location.pathname && "text-indigo-600"
                  }`}
                >
                  {title}
                </span>
              </li>
            </A>
          ))}
        </ul>
      </div>
    </aside>
  );
};
