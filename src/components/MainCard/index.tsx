import { ReactNode } from "react";
import { MainCardContainer } from "./styles";

interface MainCardProps {
  children: ReactNode
}

export function MainCard({ children }: MainCardProps) {
  return (
    <MainCardContainer>
      {children}
    </MainCardContainer>
  )
}