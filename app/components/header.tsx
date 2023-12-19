"use client"
import Link from "next/link";
import {
    MagnifyingGlassCircleIcon
} from "@heroicons/react/24/outline"
import React, { useState } from "react";


export default function Header() {
    let [show, showContainerSearch] = useState(false)

    function SearchContainer(props: any) {
        if (props.show) {
            return (
                <div className="duration-300">
                    <input type="text" placeholder="Cari Video..." className="shadow rounded outline-0 px-2 py-1 text-[0.8rem]" />
                </div>
            )
        }
    }

    return (
        <div className="w-[90%] flex justify-between items-center">
            <h1>
                <Link href="/">
                    Zawnime
                </Link>
            </h1>
            <div className="p-1 bg-indigo-100 hover:bg-indigo-200 duration-300 rounded" >
                <div className="h-[26px] flex items-center gap-2">
                    <SearchContainer show={show} />
                    <div className="px-1 cursor-pointer">
                        <MagnifyingGlassCircleIcon
                            onClick={() => showContainerSearch(!show)}
                            width={18}
                            height={18}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}