type pageHeaderProps = {
  headerTitle: string;
  subtitle?: string;
};

export const PageHeader = (props: pageHeaderProps) => {
  return (
    <div class="mb-6 md:mb-10">
      <h2 class="text-2xl lg:text-3xl text-black font-semibold tracking-tight capitalize">
        {props.headerTitle}
      </h2>
      {props.subtitle && (
        <p class="text-base md:text-xl text-gray-700 mt-2">{props.subtitle}</p>
      )}
    </div>
  );
};
