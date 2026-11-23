# news-in-one-image-20261122

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/nugian10/news-in-one-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/nugian10/news-in-one-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

One image that sums up the world's news of Sunday 22 November 2026, set as a newspaper front page. The lead story is Iran's missile-and-drone strike on U.S. bases in Bahrain on Saturday night; below it, the COP31 climate summit in Antalya collapses with no deal, and the EU and Indonesia sign a landmark trade pact after nearly ten years of talks. A brief box carries Friday's market slide, the capture of cartel boss "El Chapo Isidro" in Mexico, India's 720 for 9 in Wellington, and China's margin-deposit cut, and a ticker rounds up the day's other stories, from the boat that capsized in Nigeria to the candy-factory fire in Cikande, Indonesia.

The front page is authored in HTML (`src/frontpage.html`, no external assets) and rendered to `entry.png` at 1024×1024; `main.ts` copies that image to the output directory and verifies its sha256.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=c9snmccq&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
