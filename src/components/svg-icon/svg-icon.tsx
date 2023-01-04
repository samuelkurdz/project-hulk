import { useDynamicSvgImport, useDynamicSvgImportProps } from "./useDynamicSvgImport";

interface SvgIconProps {
  iconName: useDynamicSvgImportProps['iconName'];
  iconType: useDynamicSvgImportProps['iconType']
  className?: string;
  svgProp?: React.SVGProps<SVGSVGElement>;
}

export function SvgIcon({ iconName, className, svgProp, iconType }: SvgIconProps) {
  const { loading, error, SvgIcon } = useDynamicSvgImport({iconName, iconType});

  return (
    <>
      {loading && (
        <div className="rounded-full bg-slate-400 animate-pulse h-8 w-8"></div>
      )}
      {SvgIcon && <SvgIcon className={className} {...svgProp} />}
    </>
  );
}
