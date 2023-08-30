import { ReactNode } from "react";
import { InfoWithIconContainer, IconContainer } from "./styles";

interface InfoWithIconProps {
  icon: ReactNode;
  iconBg: string;
  text: string | ReactNode;
}

export function InfoWithIcon({icon, iconBg, text}:InfoWithIconProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer iconBg={iconBg}>
        {icon}
      </IconContainer>
      {typeof text ==='string' ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  )
}