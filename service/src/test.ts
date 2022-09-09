import 'dotenv/config'
import { getMultiAddresses, loadPeerIdFromFile } from "./utils";
import { validateEnvVars } from "./utils/validateEnv";
import { randomArchVals } from "./utils/random-arch-gen.js";
import { Archaeologist } from "./models/archaeologist";
import { Libp2p } from "libp2p";
import { ethers } from 'ethers';

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * This file is used to test multiple archaeologists locally
 * Set numOfArchsToGenerate for how many archaeologists to generate
 */

const numOfArchsToGenerate = 1
const startingTcpPort = randomIntFromInterval(10000, 15000)
const startingWsPort = randomIntFromInterval(15001, 20000)
const encryptionWallet = new ethers.Wallet(process.env.ENCRYPTION_PRIVATE_KEY!);

const config = validateEnvVars(true);
let archInitNodePromises: Promise<void | Libp2p>[] = [];

/**
 * Setup and start Bootstrap Node
 */

const peerId = await loadPeerIdFromFile();

const { listenAddresses } = await randomArchVals(
  startingTcpPort, startingWsPort
)

const bootstrap = new Archaeologist({
  name: "bootstrap",
  peerId,
  listenAddresses,
  isBootstrap: true
})

await bootstrap.initNode({ config, encryptionWallet })

/**
 * Setup and start non-bootstrap nodes
 */

const bootstrapList = getMultiAddresses(bootstrap.node)
const archs: Archaeologist[] = []

// Nodes will start with this delay between them
const delayIncrement = 2000;
let delay = 0;

for (let i = 1; i <= numOfArchsToGenerate; i++) {
  const { peerId, listenAddresses } = await randomArchVals(startingTcpPort + i, startingWsPort + i)
  const arch = new Archaeologist({
    name: `arch${i}`,
    peerId,
    listenAddresses,
    bootstrapList,
  })

  archInitNodePromises.push(
    new Promise(resolve => setTimeout(resolve, delay))
      .then(() => {
        return arch.initNode({ config, encryptionWallet })
      })
  )
  archs.push(arch)
  delay += delayIncrement
}

await Promise.all(archInitNodePromises);

/**
 * Handle streams for all non-bootstrap nodes
 */

for (let i = 0; i < numOfArchsToGenerate; i++) {
  archs[i].setupIncomingConfigStream()
}

[`exit`, `SIGINT`, `SIGUSR1`, `SIGUSR2`, `uncaughtException`, `SIGTERM`].forEach((eventType) => {
  process.on(eventType, async () => {
    console.log(`received exit event: ${eventType}`)

    await bootstrap.shutdown()
    for (let i = 0; i < numOfArchsToGenerate; i++) {
      await archs[i].shutdown()
    }
    process.exit(2);
  });
})



