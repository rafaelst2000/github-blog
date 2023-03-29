import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/axios";
import { Loading } from "../../components/Loading";
import { IPost } from "../Home";
import { DetailsBanner } from "./DetailsBanner";
import { PostContent } from "./PostContent";
import { DetailsPageContainer } from "./styles";

const username = import.meta.env.VITE_GITHUB_USERNAME
const reponame = import.meta.env.VITE_GITHUB_REPONAME

export function Details(){
  const [isLoading, setIsLoading] = useState(true)
  const [post, setPost] = useState<IPost>({} as IPost)

  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/repos/${username}/${reponame}/issues/${id}`)
      setPost(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [post])

  useEffect(() => {
    getPostDetails()
  }, [])

  return (
    <DetailsPageContainer>
      {isLoading ? <Loading /> :
        <>
          <DetailsBanner post={post}/>
          <PostContent content={post.body} />
        </>
      }
    </DetailsPageContainer>
  )
}