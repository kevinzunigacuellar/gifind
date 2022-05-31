import { useParams } from 'solid-app-router'
import Subtitle from '../components/Subtitle'
export default function Search() {
  const { query } = useParams()
  return (
    <>
      <Subtitle text={`🔍 Searching for "${query}"`} />
    </>
  )
}
