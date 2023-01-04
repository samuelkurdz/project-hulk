import { SvgIcon } from "../components/svg-icon";

export default function HomePage() {
  return (
    <>
      <p className="text-purple-900">Project Hulk</p>
      <SvgIcon
        iconType="outline"
        className="w-5 h-5"
        iconName="ChevronDoubleDownIcon"
      />
    </>
  );
}
