import { MainCard } from "../../../components/MainCard";
import { HomeMainCardInfo } from "./styles";
import { ArrowSquareOut, GithubLogo, Buildings, Users } from 'phosphor-react'
import { useTheme } from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../api/axios";
import { Loading } from "../../../components/Loading";

interface ProfileData {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  followers: number
}

const username = import.meta.env.VITE_GITHUB_USERNAME

export function HomeBanner() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
  const [isLoading, setIsLoading] = useState(true)
  const theme = useTheme()

  const getProfileData = useCallback(async() => {
    try {
      setIsLoading(true)
      const response = await api.get(`/users/${username}`)
      setProfileData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [profileData])

  useEffect(() => {
    getProfileData() 
  }, [])

  return (
    <MainCard>
      {isLoading ? <Loading /> :
      <HomeMainCardInfo>
         <img src={profileData.avatar_url} alt="" />
         <div>
           <div className="name-container">
             <h1>{profileData.name}</h1>
             <a target="_blank" href={`https://github.com/${username}`}>
               Github
               <ArrowSquareOut size={20} weight="bold"/>
             </a>
           </div>
           <p>{profileData.bio}</p>
         
           <ul className="info-container">
             <li>
               <GithubLogo color={theme["base-label"]} size={20} weight="fill"/>
               <span>{username}</span>
             </li>
            {profileData?.company && (
              <li>
                 <Buildings color={theme["base-label"]} size={20} weight="fill"/>
                 <span>{profileData.company}</span>
               </li>
            )}
             <li>
               <Users color={theme["base-label"]} size={20} weight="fill"/>
               <span>{profileData.followers} seguidores</span>
             </li>
           </ul>
         </div>
       </HomeMainCardInfo>
      
      }
    </MainCard>
  )
}