import Head from "next/head";
import HomePage from "./home";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const choseState = atom({
  key: " choseState",
  default: true,
});

export default function Root() {
  return (
    <>
      <Head>
        <title>图度 | 你的校园地图</title>
        <meta name="description" content="图度,你的校园地图" />
        <meta name="keywords" content="图度,你的校园地图" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <RecoilRoot>
        <HomePage />
      </RecoilRoot>
    </>
  );
}
