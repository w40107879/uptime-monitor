import { FC } from "react";
import { MonitorStatusType } from "@root/types/monitor";

const StatusBadge: FC<{ status: MonitorStatusType | undefined }> = ({
    status,
  }) => {
    const up = status?.up;
    return up ? (
      <Badge color="green">Up</Badge>
    ) : up === false ? (
      <Badge color="red">Down</Badge>
    ) : (
      <Badge color="gray">Unknown</Badge>
    );
  };
  
  const Badge: FC<{
    color: "green" | "red" | "orange" | "gray";
    children?: React.ReactNode;
  }> = ({ color, children }) => {
    const [bgColor, textColor] = {
      green: ["bg-green-100", "text-green-800"],
      red: ["bg-red-100", "text-red-800"],
      orange: ["bg-orange-100", "text-orange-800"],
      gray: ["bg-gray-100", "text-gray-800"],
    }[color]!;
  
    return (
      <span
        className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium uppercase ${bgColor} ${textColor}`}
      >
        {children}
      </span>
    );
  };

export default StatusBadge;

