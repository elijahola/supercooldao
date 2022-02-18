import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xC341C779De1Fa5acF6328731993b214E1f077b79",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Super Cool Pass",
        description: "This NFT will give you access to Super Cool DAO!",
        image: readFileSync("scripts/assets/supercoolpass.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()