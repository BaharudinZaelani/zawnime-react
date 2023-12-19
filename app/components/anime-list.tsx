'use client'
import Image from "next/image"
import { animeList } from "../lib/anim-dummy"
import Link from "next/link"
import {
    PlayIcon
} from "@heroicons/react/16/solid"

function AnimeList() {
    return (
        <div className="flex gap-3">
            {animeList.data.map(item => {
                return (
                    <div className="rounded p-4 bg-white shadow-sm">
                        <Image
                            className="rounded"
                            src="me.png"
                            alt={item.title}
                            loader={() => (item.cover)}
                            width={180}
                            height={300}
                        />
                        <Link
                            href={`anime/${item.id}`}
                        >
                            <div
                                className="border bg-indigo-300 rounded w-[max-content] px-[5px] py-[3px] mb-3 mt-2 hover:bg-indigo-100 duration-300"
                            >
                                <PlayIcon
                                    width={18}
                                    hanging={18}
                                />
                            </div>
                        </Link>
                        <div>{item.title}</div>
                        <div className="grid grid-cols-2 gap-[5px]">
                            {(item.category.split(",").map(genre => (
                                <span className="px-2 text-[0.6rem] text-center rounded bg-indigo-100">{genre}</span>
                            )))}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default AnimeList