"use client"

import { animeList, AnimeData } from "@/app/lib/anim-dummy"
import Image from "next/image"
import Link from "next/link"
import {
    ArrowLeftIcon
} from "@heroicons/react/16/solid"

export default function AnimeShow({ params }: { params: { id: String } }) {
    let id = params.id
    let anime!: AnimeData
    animeList.data.forEach(item => {
        if (parseInt(id.toString()) == item.id) {
            anime = item
        }
    })

    return (
        <>
            <div className="mb-2">

                <Link
                    href={`/`}
                >
                    <div
                        className="flex gap-2 text-white border bg-indigo-300 rounded w-[max-content] px-[5px] py-[3px] mt-3 hover:bg-indigo-100 duration-300"
                    >
                        <ArrowLeftIcon
                            width={12}
                            hanging={12}
                        />
                        <span className="text-[0.7rem]">Kembali</span>
                    </div>
                </Link>
            </div>
            <div className="flex gap-4">
                <div className="felx-initial w-[180px]">
                    <div className="p-2 rounded shadow">
                        <Image
                            alt={anime.title}
                            src="anime.png"
                            loader={() => (anime.image)}
                            width={180}
                            height={300}
                            className="rounded"
                        />
                    </div>
                </div>
                <div className="felx-initial w-full">
                    <div className="p-3 rounded shadow">
                        <div className="mb-4">
                            <h1 className="pb-2 border-b-2 inline pe-32">{anime.title}</h1>
                        </div>
                        <div className="flex gap-[5px]">
                            {(anime.category.split(",").map(genre => (
                                <span className="px-2 text-[0.6rem] text-center rounded bg-indigo-100">{genre}</span>
                            )))}
                        </div>
                        <div className="py-3">
                            <p className="text-xs">{anime.sinopsis}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}