import { HomeBanner } from "./HomeBanner";
import { HomeCard } from "./HomeCard";
import { HomePageContainer } from "./styles";

export function Home(){
  return (
    <HomePageContainer>
      <HomeBanner />

      <div className="home-content">
        <div className="posts-info">
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>
          <input
            type="text"
            placeholder="Buscar conteúdo"
          />
      </div>

      <ul>
        <HomeCard 
          title="Javascript data types and data structures"
          description="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript"
          date={'1'}
        />
        <HomeCard 
          title="Javascript data types and data structures"
          description="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript"
          date={'1'}
        />
        <HomeCard 
          title="Javascript data types and data structures"
          description="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript"
          date={'1'}
        />
        <HomeCard 
          title="Javascript data types and data structures"
          description="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript"
          date={'1'}
        />
      </ul>
    </HomePageContainer>
  )
}