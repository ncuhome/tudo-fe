import Head from 'next/head'
import HomePage from "./home/homepage";

export default function Root() {

    return (
        <>
            <Head>
                <title>图度 | 你的校园地图</title>
                <meta name="description" content="图度,你的校园地图"/>
                <meta name="keywords" content="图度,你的校园地图" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <HomePage/>
        </>
    )
}
