const { join, extname, basename } = require("path");
const { readdirSync, renameSync, writeFileSync } = require("fs");

const path = "./metadata";

for (let i = 1; i <= 150; i++) {
  const metadata = {
    name: "The ARIval 2022",
    description:
      "The ARIval at Barcelona Celo Connect. This NFT will give you access to $ARI rewards and those that download Thenode.fi to future use of Artist/creator space",
    image: `https://raw.githubusercontent.com/Node-Fi/ARIval-NFT/main/images/${i}.png`,
  };
  writeFileSync(`${path}/${i}.json`, JSON.stringify(metadata));
}
