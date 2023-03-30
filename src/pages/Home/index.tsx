import { useCallback, useEffect, useState } from "react";
import { api } from "../../api/axios";
import { HomeBanner } from "./HomeBanner";
import { HomeCard } from "./HomeCard";
import { HomePageContainer } from "./styles";
import * as z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { Loading } from "../../components/Loading";

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>

const username = import.meta.env.VITE_GITHUB_USERNAME
const reponame = import.meta.env.VITE_GITHUB_REPONAME
export interface IPost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Home(){
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query)
  }

  const getPosts = useCallback(async(query: string = '') => {
    try {
      setIsLoading(true)
      const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${reponame}`)
      console.log(response.data)
      setPosts(response.data.items)
      console.log(posts)
    } finally {
      setIsLoading(false)
    }
  }, [posts])

  useEffect(() => {
    getPosts() 
  }, [])

  return (
    <HomePageContainer>
      {isLoading ? <Loading /> :
      <>   
      <HomeBanner />

      <div className="home-content">
        <div className="posts-info">
          <h2>Publicações</h2>
          <span>{posts.length} publicações</span>
        </div>
        <form onSubmit={handleSubmit(handleSearchPosts)}>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
        </form>
      </div>

      <ul>
        {posts.map((post) => (
          <HomeCard 
            key={post.number}
            post={post}
          />
        ))}
      </ul>
      </>}
    </HomePageContainer>
  )
}