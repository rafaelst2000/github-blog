import { LoadingContainer } from "./styles";

export function Loading(){
  return (
    <LoadingContainer>
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </LoadingContainer>
  )
}