interface Anime {
    data: AnimeData[]
}
export interface AnimeData {
    id: number
    title: string
    type_video: string
    image: string
    cover: string
    sinopsis: string
    category: string // genre
}
const animeList: Anime = {
    data: []
}
animeList.data.push(
    {
        id: 1,
        title: "One Piece",
        type_video: "anime",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFmCt9MRntrR7mM54_LbOcq3dq7JQtOnfsQ",
        image: "https://cdn.myanimelist.net/images/anime/1011/120243l.jpg",
        category: "Action, Adventure, Comedy, Drama, Fantasy, Shounen, Super Power",
        sinopsis: "ada seorang bajak laut terkenal di seluruh lautan bernama Gol D. Roger. Ia merupakan seorang raja bajak laut yang telah berlayar mengarungi seluruh Grand Line, sayangnya ia ditangkap pemerintah dan telah dieksekusi mati. Sesaat sebelum kematiannya, Ia mengumumkan kepada dunia bahwa dirinya menyimpan sebuah harta karun bernama One Piece, sebuah harta karun yang kini menjadi incaran seluruh bajak laut yang ada di dunia.\r\n"
    }
)

export {
    animeList
}