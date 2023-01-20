import { For } from "solid-js";
import { Badge } from "../../../components/badge";
import { CustomIcon } from "../../../components/icon";

const stackData = [
  {
    title: "Team members",
    currentValue: 71897,
    previousValue: 70946,
    valueType: "figures",
    highlight: "12%",
    direction: "down",
  },
  {
    title: "Workers",
    currentValue: 71897,
    previousValue: 70946,
    valueType: "figures",
    highlight: "2.02%",
    direction: "up",
  },
  {
    title: "Events",
    currentValue: 58.17,
    previousValue: 56.4,
    valueType: "percentages",
    highlight: "12%",
    direction: "up",
  },
  {
    title: "Attendances",
    currentValue: 24.55,
    previousValue: 28.4,
    valueType: "percentages",
    highlight: "4.23%",
    direction: "down",
  },
];

export const DashboardStatistics = () => {
  return (
    <section>
      {/* should be a drop down of duration to generate stats for */}
      <h4 class="text-gray-900 font-medium mb-5">Last 30 Days</h4>
      <div class="relative z-10 bg-white rounded-xl shadow ring-1 ring-slate-200">
        <div class="grid grid-cols-1 xl:grid-cols-4 divide-y divide-x-0 xl:divide-y-0 xl:divide-x">
          <For each={stackData}>
            {(stack) => (
              <article class="bg-white p-6 first:rounded-t-2xl last:rounded-b-2xl xl:first:rounded-l-2xl xl:last:rounded-r-2xl xl:first:rounded-tr-none xl:last:rounded-bl-none">
                <h4 class="text-gray-900 hover:text-indigo-600 cursor-pointer text-base mt-1 inline-block">
                  {stack.title}
                </h4>
                <div class="flex items-baseline gap-2">
                  <h2 class="text-indigo-600 font-semibold text-2xl">
                    {`${stack.currentValue}${
                      stack.valueType === "percentages" ? "%" : ""
                    }`}
                  </h2>
                  <p>
                    from{" "}
                    {`${stack.previousValue}${
                      stack.valueType === "percentages" ? "%" : ""
                    }`}
                  </p>
                  <Badge
                    variant={stack.direction === "up" ? "success" : "error"}
                    wrapperClass="ml-auto"
                  >
                    <span class="flex items-center gap-0.5">
                      <CustomIcon
                        iconType="outline"
                        iconName={
                          stack.direction === "up"
                            ? "arrowSmallUp"
                            : "arrowSmallDown"
                        }
                        class="h-4 w-2.5"
                      />
                      {stack.highlight}
                    </span>
                  </Badge>
                </div>
              </article>
            )}
          </For>
        </div>
      </div>
    </section>
  );
};
