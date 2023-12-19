import AnimeList from "./components/anime-list"

export default function Home() {
  return (
    <>
      <h1 className="pe-3 inline border-b-4">Anime Terbaru</h1>
      <div className="pt-3">
        <AnimeList />
      </div>
    </>
  )
}
