import { ChildrenReactNode } from "@/types/interface";

const ContainerStrokeGrayDivisor = ({
  children,
  classname,
}: ChildrenReactNode & { classname?: string }) => {
  const columns =
    Array.isArray(children) && children.length > 0
      ? `grid-cols-3 ${Math.min(children.length, 3)}`
      : "grid-cols-1";

  return (
    <div
      className={`grid ${columns} w-full divide-x divide-y divide-stroke-gray border border-stroke-gray ${classname} place-content-center`}
    >
      {children}
    </div>
  );
};

export default ContainerStrokeGrayDivisor;
