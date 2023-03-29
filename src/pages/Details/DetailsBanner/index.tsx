import { MainCard } from "../../../components/MainCard";
import { HomeMainCardInfo } from "./styles";
import { ArrowSquareOut, GithubLogo, CaretLeft, CalendarBlank, ChatCircle } from 'phosphor-react'
import { useTheme } from "styled-components";
import { IPost } from "../../Home";
import { Link } from "react-router-dom";
import { relativeDateFormatter } from "../../../formatters";

interface DetailsBannerProps {
  post: IPost
}

export function DetailsBanner({ post }: DetailsBannerProps) {
  const theme = useTheme()
  const formattedDate = relativeDateFormatter(post.created_at)
  return (
    <MainCard>
        <HomeMainCardInfo>
          <div className="actions-container">
            <Link to="/">
              <CaretLeft size={20} weight="bold"/>
              Voltar
            </Link>
            <a target="_blank" href={post.html_url}>
              Github
              <ArrowSquareOut size={20} weight="bold"/>
            </a>
          </div>
          <h1>{post.title}</h1>
        
          <ul className="info-container">
            <li>
              <GithubLogo color={theme["base-label"]} size={20} weight="fill"/>
              <span>{post.user.login}</span>
            </li>
            <li>
              <CalendarBlank color={theme["base-label"]} size={20} weight="fill"/>
              <span>{formattedDate}</span>
            </li>
            <li>
              <ChatCircle color={theme["base-label"]} size={20} weight="fill"/>
              <span>{post.comments} comentários</span>
            </li>
          </ul>
        </HomeMainCardInfo>
      </MainCard>
  )
}