import { HomeCardContainer } from "./styles";
import { ellipsis } from '../../../helpers'

interface HomeCardProps {
  title: string
  description: string
  date: string
}

export function HomeCard({ title, description, date }: HomeCardProps) {
  return (
    <HomeCardContainer>
      <div className="title-container">
        <h1>{title}</h1>
        <span>Há {date} dia</span>
      </div>
      <p>{ellipsis(description, 181)}</p>
    </HomeCardContainer>
  )
}