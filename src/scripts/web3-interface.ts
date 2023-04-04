import { ethers } from "ethers";
import { exit } from "process";
import { archLogger } from "../logger/chalk-theme";
import {
  IERC20,
  ArchaeologistFacet__factory,
  ViewStateFacet__factory,
  ViewStateFacet,
  IERC20__factory,
  ThirdPartyFacet,
  ThirdPartyFacet__factory,
} from "@sarcophagus-org/sarcophagus-v2-contracts";
import { BAD_ENV } from "../utils/exit-codes";
import { getNetworkConfigByChainId, localChainId } from "../lib/config";
import { NetworkConfig } from "../lib/types/network-config";
import { KeyFinder } from "../models/key-finder";
import { ArchaeologistFacetX } from "./web3-interface/archaeologist-facet-x";

export interface Web3Interface {
  networkName: string;
  ethWallet: ethers.Wallet;
  encryptionHdWallet: ethers.utils.HDNode;
  keyFinder: KeyFinder;
  sarcoToken: IERC20;
  archaeologistFacet: ArchaeologistFacetX;
  thirdPartyFacet: ThirdPartyFacet;
  viewStateFacet: ViewStateFacet;
  networkConfig: NetworkConfig;
}

let web3Interface: Web3Interface | undefined;

export const getWeb3Interface = async (isTest?: boolean): Promise<Web3Interface> => {
  if (!!web3Interface) {
    return web3Interface;
  }

  try {
    const networkConfig = getNetworkConfigByChainId(process.env.CHAIN_ID || localChainId);

    const rpcProvider = new ethers.providers.JsonRpcProvider(
      networkConfig.providerUrl || process.env.PROVIDER_URL
    );

    // TODO -- if the mnemonic needs to gen the wallet for signing key
    // this will need updated
    const ethWallet = isTest
      ? ethers.Wallet.createRandom()
      : new ethers.Wallet(process.env.ETH_PRIVATE_KEY!, rpcProvider);

    const encryptionHdWallet = ethers.utils.HDNode.fromMnemonic(process.env.ENCRYPTION_MNEMONIC!);

    const network = await rpcProvider.detectNetwork();

    const sarcoToken = IERC20__factory.connect(networkConfig.sarcoTokenAddress, ethWallet);

    const diamondDeployAddress = process.env.DIAMOND_DEPLOY_ADDRESS ?? networkConfig.diamondDeployAddress;

    const archaeologistFacet = ArchaeologistFacet__factory.connect(
      diamondDeployAddress,
      ethWallet
    );
    const viewStateFacet = ViewStateFacet__factory.connect(
      diamondDeployAddress,
      ethWallet
    );
    const thirdPartyFacet = ThirdPartyFacet__factory.connect(
      diamondDeployAddress,
      ethWallet
    );

    const keyFinder = new KeyFinder(encryptionHdWallet);

    // Cannot confirm rpcProvider is valid until an actual network call is attempted
    sarcoToken.balanceOf(ethWallet.address);

    web3Interface = {
      networkName: network.name,
      encryptionHdWallet,
      keyFinder,
      ethWallet,
      sarcoToken,
      archaeologistFacet: new ArchaeologistFacetX(archaeologistFacet),
      viewStateFacet,
      thirdPartyFacet,
      networkConfig,
    } as Web3Interface;

    return web3Interface;
  } catch (e) {
    archLogger.error(e);
    archLogger.error("Confirm PROVIDER_URL in .env is a valid RPC Provider URL");
    exit(BAD_ENV);
  }
};
