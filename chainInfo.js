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
      experienceKeys: await multichain.listStreamKeys({
        stream: "experiences"
      }),
      educationKeys: await multichain.listStreamKeys({ stream: "education" })
    };
    console.log("\nChain info:");
    console.log(data.info);

    console.log("\nStreams:");
    console.log(data.streams);
    // Keys for the users
    console.log("\nUser Keys:");
    console.log(data.userKeys);
    // Keys for the profile experiences
    console.log("\nExperience Keys:");
    console.log(data.experienceKeys);
    // Keys for the profile education data
    console.log("\nEducation Keys:");
    console.log(data.educationKeys);
  } catch (err) {
    console.log(err);
  }
}

init();
