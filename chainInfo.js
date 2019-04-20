const multichainOptions = require("./utils/multichainOptions");
const multichain = require("multichain-node")(multichainOptions);

// const StrToHex = (string => Buffer.from(string, 'utf8').toString('hex'));
// const HexToStr = (hex => Buffer.from(hex, 'hex').toString('utf8'));

async function init() {
  try {
    const data = {
      info: await multichain.getInfo(),
      streams: await multichain.listStreams(),
      userKeys: await multichain.listStreamKeys({ stream: "users" }),
      profileKeys: await multichain.listStreamKeys({ stream: "profiles" })
    };
    console.log("\nChain info:");
    console.log(data.info);

    console.log("\nStreams:");
    console.log(data.streams);
    // Keys for the users
    console.log("\nUser Keys:");
    console.log(data.userKeys);
    // Keys for the profiles
    console.log("\nProfile Keys:");
    console.log(data.profileKeys);
  } catch (err) {
    console.log(err);
  }
}

init();
