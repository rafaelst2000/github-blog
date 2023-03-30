import { HomeCardContainer } from "./styles";
import { ellipsis } from '../../../helpers'
import { IPost } from "..";
import { Link } from "react-router-dom";
import { relativeDateFormatter } from "../../../formatters";

interface HomeCardProps {
  post: IPost
}

export function HomeCard({ post }: HomeCardProps) {
  const formattedDate = relativeDateFormatter(post.created_at)

  return (
    <HomeCardContainer to={`/details/${post.number}`}> 
      <div className="title-container">
        <h1>{post.title}</h1>
        <span>{formattedDate}</span>
      </div>
      <p>{ellipsis(post.body, 150)}</p>
    </HomeCardContainer>
  )
}