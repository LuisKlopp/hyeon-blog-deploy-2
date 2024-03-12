import { cn } from "@/lib/utils";

interface CallOutProps {
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger";
}

export const Callout = ({
  children,
  type = "default",
  ...props
}: CallOutProps) => {
  return (
    <div
      className={cn(
        "my-6 items-start rounded-md border border-1-4 p-4 w-full dark:max-w-none ",
        {
          "border-red-988 bf-red-50 dark:prose":
            type === "danger",
          "border-yellow-988 bg-yellow-50 dark:prose":
            type === "warning",
        },
      )}
      {...props}
    >
      {children}
    </div>
  );
};
