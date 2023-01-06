import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "./Avatar";
import { Feed } from "./Feed";
import { TopicsList } from "./TopicsList";

const Pitch = () => (
    <div className={styles.pitch}>
        <h1>
            <Link href="/">
                <Image
                    src="/logo.png"
                    alt="ScholarStream.ai logo"
                    width={64}
                    height={64}
                />
                ScholarStream.ai
            </Link>
        </h1>
        <p>Welcome to the world of academic insights!</p>
        <p>
            Are you tired of the shallow and attention-seeking content on social
            media? Are you looking for a deeper understanding of the world
            around you? Look no further!
        </p>
        <p>
            <a href="/">ScholarStream.ai</a> brings you the latest research from
            the world of academia, all in a convenient and engaging Twitter-like
            feed.
        </p>
        <p>
            With <a href="/">ScholarStream.ai</a>, you can dive into the latest
            findings from top researchers and scholars, all at the touch of a
            button. No more sifting through tedious journals or abstracts – our
            AI does the work for you, presenting you with the latest information
            in an easily digestible format.
        </p>
        <p>
            Explore the depths of knowledge today with ScholarStream.ai. Your
            mind will thank you!
        </p>
    </div>
);

export default async function Home() {
    return (
        <main className={styles.main}>
            <Pitch />

            <h2>Read about:</h2>
            <TopicsList />

            <Feed topic="cs.AI" count={5} />
        </main>
    );
}
