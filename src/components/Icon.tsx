import { icons } from "../consts/components/bottomNav";

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  size?: number;
}

export default function Icon({ name, size = 24 }: IconProps) {
  return (
    <span style={{ width: size, height: size, display: "flex" }}>
      {icons[name]}
    </span>
  );
}
