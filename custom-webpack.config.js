const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

let localCanisters, prodCanisters, canisters;

function initCanisterIds() {

  try {
    localCanisters = require(path.resolve(".dfx", "local", "canister_ids.json"));
  } catch (error) {
    console.log("No local canister_ids.json found. Continuing production");
  }

  try {
    prodCanisters = require(path.resolve("canister_ids.json"));
  } catch (error) {
    console.log("No production canister_ids.json found. Continuing with local");
  }

  const network =
    process.env.DFX_NETWORK ||
    (process.env.NODE_ENV === "production" ? "ic" : "local");

  canisters = network === "local" ? localCanisters : prodCanisters;

  for (const canister in canisters) {
    process.env[canister.toUpperCase() + "_CANISTER_ID"] =
      canisters[canister][network];
  }
}

initCanisterIds();

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  node: { global: true },
  optimization: {
    minimize: !isDevelopment,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new webpack.EnvironmentPlugin({      
      COUNTER_CANISTER_ID: canisters["counter"]
    }),
    new webpack.ProvidePlugin({
      Buffer: [require.resolve("buffer/"), "Buffer"],
      process: require.resolve("process/browser"),
    }),
  ],
};
