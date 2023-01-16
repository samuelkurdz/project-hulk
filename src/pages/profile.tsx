import { Button } from "../components/button";

export const Profile = () => {
  return (
    <div>
      <Button
        variant="tertiary"
        size="sm"
        width="full"
        onClick={() => console.log("dsvn")}
      >
        <span>Click me</span>
      </Button>
    </div>
  );
};
