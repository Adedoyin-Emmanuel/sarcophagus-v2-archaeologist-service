/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ViewStateFacetInterface extends ethers.utils.Interface {
  functions: {
    "getArchaeologistAccusals(address)": FunctionFragment;
    "getArchaeologistCleanups(address)": FunctionFragment;
    "getArchaeologistProfile(address)": FunctionFragment;
    "getArchaeologistProfileAddressAtIndex(uint256)": FunctionFragment;
    "getArchaeologistSarcophagi(address)": FunctionFragment;
    "getArchaeologistSuccessOnSarcophagus(address,bytes32)": FunctionFragment;
    "getAvailableRewards(address)": FunctionFragment;
    "getCursedBond(address)": FunctionFragment;
    "getEmbalmerSarcophagi(address)": FunctionFragment;
    "getFreeBond(address)": FunctionFragment;
    "getProtocolFeeAmount()": FunctionFragment;
    "getRecipientSarcophagi(address)": FunctionFragment;
    "getSarcophagus(bytes32)": FunctionFragment;
    "getSarcophagusArchaeologist(bytes32,address)": FunctionFragment;
    "getTotalProtocolFees()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getArchaeologistAccusals",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getArchaeologistCleanups",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getArchaeologistProfile",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getArchaeologistProfileAddressAtIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getArchaeologistSarcophagi",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getArchaeologistSuccessOnSarcophagus",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAvailableRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCursedBond",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getEmbalmerSarcophagi",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getFreeBond", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getProtocolFeeAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRecipientSarcophagi",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getSarcophagus",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSarcophagusArchaeologist",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalProtocolFees",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getArchaeologistAccusals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getArchaeologistCleanups",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getArchaeologistProfile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getArchaeologistProfileAddressAtIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getArchaeologistSarcophagi",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getArchaeologistSuccessOnSarcophagus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAvailableRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCursedBond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEmbalmerSarcophagi",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFreeBond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProtocolFeeAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecipientSarcophagi",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSarcophagus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSarcophagusArchaeologist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalProtocolFees",
    data: BytesLike
  ): Result;

  events: {};
}

export class ViewStateFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ViewStateFacetInterface;

  functions: {
    getArchaeologistAccusals(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getArchaeologistCleanups(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getArchaeologistProfile(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [boolean, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
          exists: boolean;
          minimumDiggingFee: BigNumber;
          maximumRewrapInterval: BigNumber;
          freeBond: BigNumber;
          cursedBond: BigNumber;
          rewards: BigNumber;
        }
      ]
    >;

    getArchaeologistProfileAddressAtIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getArchaeologistSarcophagi(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getArchaeologistSuccessOnSarcophagus(
      archaeologist: string,
      sarcoId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getAvailableRewards(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getCursedBond(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getEmbalmerSarcophagi(
      embalmer: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getFreeBond(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getProtocolFeeAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRecipientSarcophagi(
      recipient: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getSarcophagus(
      sarcoId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          number,
          boolean,
          number,
          BigNumber,
          BigNumber,
          string[],
          BigNumber,
          string,
          string,
          string,
          string[]
        ] & {
          name: string;
          state: number;
          canBeTransferred: boolean;
          minShards: number;
          resurrectionTime: BigNumber;
          resurrectionWindow: BigNumber;
          arweaveTxIds: string[];
          storageFee: BigNumber;
          embalmer: string;
          recipientAddress: string;
          arweaveArchaeologist: string;
          archaeologists: string[];
        }
      ]
    >;

    getSarcophagusArchaeologist(
      sarcoId: BytesLike,
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber, BigNumber, string, string, BigNumber] & {
          diggingFee: BigNumber;
          bounty: BigNumber;
          diggingFeesPaid: BigNumber;
          doubleHashedShard: string;
          unencryptedShard: string;
          curseTokenId: BigNumber;
        }
      ]
    >;

    getTotalProtocolFees(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  getArchaeologistAccusals(
    archaeologist: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getArchaeologistCleanups(
    archaeologist: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getArchaeologistProfile(
    archaeologist: string,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      exists: boolean;
      minimumDiggingFee: BigNumber;
      maximumRewrapInterval: BigNumber;
      freeBond: BigNumber;
      cursedBond: BigNumber;
      rewards: BigNumber;
    }
  >;

  getArchaeologistProfileAddressAtIndex(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getArchaeologistSarcophagi(
    archaeologist: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getArchaeologistSuccessOnSarcophagus(
    archaeologist: string,
    sarcoId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getAvailableRewards(
    archaeologist: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCursedBond(
    archaeologist: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getEmbalmerSarcophagi(
    embalmer: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getFreeBond(
    archaeologist: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getProtocolFeeAmount(overrides?: CallOverrides): Promise<BigNumber>;

  getRecipientSarcophagi(
    recipient: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getSarcophagus(
    sarcoId: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      number,
      boolean,
      number,
      BigNumber,
      BigNumber,
      string[],
      BigNumber,
      string,
      string,
      string,
      string[]
    ] & {
      name: string;
      state: number;
      canBeTransferred: boolean;
      minShards: number;
      resurrectionTime: BigNumber;
      resurrectionWindow: BigNumber;
      arweaveTxIds: string[];
      storageFee: BigNumber;
      embalmer: string;
      recipientAddress: string;
      arweaveArchaeologist: string;
      archaeologists: string[];
    }
  >;

  getSarcophagusArchaeologist(
    sarcoId: BytesLike,
    archaeologist: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, string, string, BigNumber] & {
      diggingFee: BigNumber;
      bounty: BigNumber;
      diggingFeesPaid: BigNumber;
      doubleHashedShard: string;
      unencryptedShard: string;
      curseTokenId: BigNumber;
    }
  >;

  getTotalProtocolFees(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getArchaeologistAccusals(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getArchaeologistCleanups(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getArchaeologistProfile(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        exists: boolean;
        minimumDiggingFee: BigNumber;
        maximumRewrapInterval: BigNumber;
        freeBond: BigNumber;
        cursedBond: BigNumber;
        rewards: BigNumber;
      }
    >;

    getArchaeologistProfileAddressAtIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getArchaeologistSarcophagi(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getArchaeologistSuccessOnSarcophagus(
      archaeologist: string,
      sarcoId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getAvailableRewards(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCursedBond(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEmbalmerSarcophagi(
      embalmer: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getFreeBond(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProtocolFeeAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getRecipientSarcophagi(
      recipient: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getSarcophagus(
      sarcoId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        number,
        boolean,
        number,
        BigNumber,
        BigNumber,
        string[],
        BigNumber,
        string,
        string,
        string,
        string[]
      ] & {
        name: string;
        state: number;
        canBeTransferred: boolean;
        minShards: number;
        resurrectionTime: BigNumber;
        resurrectionWindow: BigNumber;
        arweaveTxIds: string[];
        storageFee: BigNumber;
        embalmer: string;
        recipientAddress: string;
        arweaveArchaeologist: string;
        archaeologists: string[];
      }
    >;

    getSarcophagusArchaeologist(
      sarcoId: BytesLike,
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, string, BigNumber] & {
        diggingFee: BigNumber;
        bounty: BigNumber;
        diggingFeesPaid: BigNumber;
        doubleHashedShard: string;
        unencryptedShard: string;
        curseTokenId: BigNumber;
      }
    >;

    getTotalProtocolFees(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getArchaeologistAccusals(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getArchaeologistCleanups(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getArchaeologistProfile(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getArchaeologistProfileAddressAtIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getArchaeologistSarcophagi(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getArchaeologistSuccessOnSarcophagus(
      archaeologist: string,
      sarcoId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAvailableRewards(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCursedBond(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEmbalmerSarcophagi(
      embalmer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFreeBond(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProtocolFeeAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getRecipientSarcophagi(
      recipient: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSarcophagus(
      sarcoId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSarcophagusArchaeologist(
      sarcoId: BytesLike,
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalProtocolFees(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getArchaeologistAccusals(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getArchaeologistCleanups(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getArchaeologistProfile(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getArchaeologistProfileAddressAtIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getArchaeologistSarcophagi(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getArchaeologistSuccessOnSarcophagus(
      archaeologist: string,
      sarcoId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAvailableRewards(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCursedBond(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEmbalmerSarcophagi(
      embalmer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFreeBond(
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProtocolFeeAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRecipientSarcophagi(
      recipient: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSarcophagus(
      sarcoId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSarcophagusArchaeologist(
      sarcoId: BytesLike,
      archaeologist: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalProtocolFees(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
