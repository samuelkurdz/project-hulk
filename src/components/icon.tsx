import { Icon } from "solid-heroicons";
import * as Solids from "solid-heroicons/solid";
import * as Outlines from "solid-heroicons/outline";
import { splitProps } from "solid-js";

export type IconProps = {
  iconName: keyof typeof Solids;
  iconType: "solid" | "outline";
  class?: string | undefined;
  classList?:
    | {
        [k: string]: boolean | undefined;
      }
    | undefined;
  onClick?: () => void;
};

export const CustomIcon = (props: IconProps) => {
  const [, others] = splitProps(props, ["iconName"]);
  const icon =
    props.iconType == "solid"
      ? Solids[props.iconName]
      : Outlines[props.iconName];
  return <Icon path={icon} {...others} />;
};
