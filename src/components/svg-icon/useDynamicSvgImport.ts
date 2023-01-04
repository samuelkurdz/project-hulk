import React, { useEffect, useRef, useState } from "react";
import * as heroIcons from "@heroicons/react/24/outline";

export interface useDynamicSvgImportProps {
  iconName: keyof typeof heroIcons;
  iconType: 'outline' | 'solid';
}

export function useDynamicSvgImport({ iconName, iconType }: useDynamicSvgImportProps) {
  const importedIconRef = useRef<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    setLoading(true);
    // dynamically import the mentioned svg icon name in props
    const importSvgIcon = async (): Promise<void> => {
      // please make sure all your svg icons are placed in the same directory
      // if we want that part to be configurable then instead of iconName we will send iconPath as prop
      try {
        importedIconRef.current = iconType === 'outline' ?
          (await import(`@heroicons/react/24/outline`))[iconName] :
          (await import(`@heroicons/react/24/solid`))[iconName];
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    importSvgIcon();
  }, [iconName, iconType]);

  return { error, loading, SvgIcon: importedIconRef.current };
}