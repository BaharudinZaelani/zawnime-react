import Link from "next/link";
import { metadata } from "../layout";

export default function Header() {
    return (
        <div className="w-[90%]">
            <h1>
                <Link
                    href="/"
                >
                    {metadata.title?.toString()}
                </Link>
            </h1>
        </div>
    )
}