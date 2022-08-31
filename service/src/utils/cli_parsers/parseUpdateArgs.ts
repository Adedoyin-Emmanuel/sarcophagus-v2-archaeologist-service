import { ethers } from "ethers";
import { exit } from "process";
import { Web3Interface } from "scripts/web3-interface";
import { getOnchainProfile } from "../../utils/onchain-data";
import { archLogger } from "../chalk-theme";
import { CLI_BAD_UPDATE_PROFILE_ARG, NO_ONCHAIN_PROFILE } from "../exit-codes";

const diggingFee = 'digging-fee';
const rewrapInterval = 'rewrap-interval';
const freeBond = 'free-bond';

export async function parseUpdateArgs(web3Interface: Web3Interface): Promise<{
    minimumDiggingFee: ethers.BigNumber;
    maximumRewrapInterval: number;
    freeBond: ethers.BigNumber;
}> {
    const argsStr = process.argv.toString().split("--")[1];

    if (!argsStr) {
        archLogger.error("Missing arguments to update");
        exit(CLI_BAD_UPDATE_PROFILE_ARG);
    }

    const args = argsStr.split(",").map(a => a.trim()).filter(a => a !== "");

    const processedArgs: string[] = [];

    const oldProfile = await getOnchainProfile(web3Interface);

    if (!oldProfile.exists) {
        archLogger.error("Profile is not registered. Use `npm run register` to register a profile for your account. See readme for usage.");
        exit(NO_ONCHAIN_PROFILE);
    }

    const updateProfileParams = {
        diggingFee: oldProfile.minimumDiggingFee,
        rewrapInterval: oldProfile.maximumRewrapInterval.toNumber(),
        freeBond: ethers.constants.Zero,
    }

    args.forEach(arg => {
        const argData = arg.split(":");

        if (argData.length !== 2) {
            archLogger.error(`Unrecognized argument format: ${arg}`);
            exit(CLI_BAD_UPDATE_PROFILE_ARG);
        }

        const argName = argData[0];
        const argVal = argData[1];

        if (processedArgs.includes(argName)) {
            archLogger.error(`Duplicate argument: ${arg}`);
            exit(CLI_BAD_UPDATE_PROFILE_ARG);
        }

        switch (argName) {
            case diggingFee:
                updateProfileParams.diggingFee = ethers.utils.parseEther(argVal);
                processedArgs.push(argName);
                break;

            case rewrapInterval:
                updateProfileParams.rewrapInterval = Number.parseInt(argVal);
                processedArgs.push(argName);
                break;

            case freeBond:
                updateProfileParams.freeBond = ethers.utils.parseEther(argVal);
                processedArgs.push(argName);
                break;

            default:
                archLogger.error(`Unrecognized argument: ${argName}`);
                exit(CLI_BAD_UPDATE_PROFILE_ARG);
        }
    })

    // validate arguments
    if (updateProfileParams.diggingFee.eq(ethers.constants.Zero)) {
        archLogger.warn(`You have removed your minimum digging fee. You might not receive any rewards!`);
    }

    if (updateProfileParams.rewrapInterval === 0) {
        archLogger.error(`Maximum rewrap interval cannot be 0`);
        exit(CLI_BAD_UPDATE_PROFILE_ARG);
    } else if (updateProfileParams.rewrapInterval === NaN) {
        archLogger.error(`Invalid \`${rewrapInterval}\` argument: ${processedArgs.push(rewrapInterval)}`);
        exit(CLI_BAD_UPDATE_PROFILE_ARG);
    }

    if (
        updateProfileParams.diggingFee.eq(oldProfile.minimumDiggingFee) &&
        updateProfileParams.rewrapInterval === oldProfile.maximumRewrapInterval.toNumber()
    ) {
        archLogger.info("\nNo changes to on-chain profile - skipping contract call\n");

        if (updateProfileParams.freeBond.gt(ethers.constants.Zero) && !updateProfileParams.freeBond.eq(oldProfile.freeBond)) {
            archLogger.warn("If you intended to simply add to your free bond, use `npm run start -- --deposit-bond:<amount>` instead\n");
        }

        archLogger.notice("NO CHANGES WERE MADE");
        exit(0);
    }

    return {
        minimumDiggingFee: updateProfileParams.diggingFee,
        maximumRewrapInterval: updateProfileParams.rewrapInterval,
        freeBond: updateProfileParams.freeBond
    }
}