import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xc247e676CB8428ed43F76246B8eA6dEF2bb1F6a2",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Super Cool Pass",
        description: "This NFT will give you access to Super Cool DAO!",
        image: readFileSync("scripts/assets/Supercooldao.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()