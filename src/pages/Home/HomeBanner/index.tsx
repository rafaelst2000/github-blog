import { MainCard } from "../../../components/MainCard";
import { HomeMainCardInfo } from "./styles";
import { ArrowSquareOut, GithubLogo, Buildings, Users } from 'phosphor-react'
import { useTheme } from "styled-components";

export function HomeBanner() {
  const theme = useTheme()

  return (
    <MainCard>
        <HomeMainCardInfo>
          <img src="https://avatars.githubusercontent.com/u/57990932?v=4" alt="" />
          <div>
            <div className="name-container">
              <h1>Rafael Trevisan</h1>
              <a target="_blank" href="https://github.com/rafaelst2000">
                Github
                <ArrowSquareOut size={20} weight="bold"/>
              </a>
            </div>
            <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
          
            <ul className="info-container">
              <li>
                <GithubLogo color={theme["base-label"]} size={20} weight="fill"/>
                <span>rafaelst2000</span>
              </li>
              <li>
                <Buildings color={theme["base-label"]} size={20} weight="fill"/>
                <span>Rocketseat</span>
              </li>
              <li>
                <Users color={theme["base-label"]} size={20} weight="fill"/>
                <span>32 seguidores</span>
              </li>
            </ul>
          </div>
        </HomeMainCardInfo>
      </MainCard>
  )
}