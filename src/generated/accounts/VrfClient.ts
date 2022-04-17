/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
import * as beetSolana from "@metaplex-foundation/beet-solana";
import * as web3 from "@solana/web3.js";

/**
 * Arguments used to create {@link VrfClient}
 * @category Accounts
 * @category generated
 */
export type VrfClientArgs = {
  bump: number;
  maxResult: beet.bignum;
  resultBuffer: number[] /* size: 32 */;
  result: beet.bignum;
  lastTimestamp: beet.bignum;
  authority: web3.PublicKey;
  vrf: web3.PublicKey;
};

const vrfClientDiscriminator = [230, 174, 157, 153, 51, 18, 230, 163];
/**
 * Holds the data for the {@link VrfClient} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class VrfClient implements VrfClientArgs {
  private constructor(
    readonly bump: number,
    readonly maxResult: beet.bignum,
    readonly resultBuffer: number[] /* size: 32 */,
    readonly result: beet.bignum,
    readonly lastTimestamp: beet.bignum,
    readonly authority: web3.PublicKey,
    readonly vrf: web3.PublicKey
  ) {}

  /**
   * Creates a {@link VrfClient} instance from the provided args.
   */
  static fromArgs(args: VrfClientArgs): VrfClient {
    return new VrfClient(
      args.bump,
      args.maxResult,
      args.resultBuffer,
      args.result,
      args.lastTimestamp,
      args.authority,
      args.vrf
    );
  }

  /**
   * Deserializes the {@link VrfClient} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [VrfClient, number] {
    return VrfClient.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link VrfClient} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey
  ): Promise<VrfClient> {
    const accountInfo = await connection.getAccountInfo(address);
    if (accountInfo == undefined) {
      throw new Error(`Unable to find VrfClient account at ${address}`);
    }
    return VrfClient.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Deserializes the {@link VrfClient} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [VrfClient, number] {
    return vrfClientBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link VrfClient} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return vrfClientBeet.serialize({
      accountDiscriminator: vrfClientDiscriminator,
      ...this,
    });
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link VrfClient}
   */
  static get byteSize() {
    return vrfClientBeet.byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link VrfClient} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      VrfClient.byteSize,
      commitment
    );
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link VrfClient} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === VrfClient.byteSize;
  }

  /**
   * Returns a readable version of {@link VrfClient} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      bump: this.bump,
      maxResult: this.maxResult,
      resultBuffer: this.resultBuffer,
      result: this.result,
      lastTimestamp: this.lastTimestamp,
      authority: this.authority.toBase58(),
      vrf: this.vrf.toBase58(),
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const vrfClientBeet = new beet.BeetStruct<
  VrfClient,
  VrfClientArgs & {
    accountDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ["accountDiscriminator", beet.uniformFixedSizeArray(beet.u8, 8)],
    ["bump", beet.u8],
    ["maxResult", beet.u64],
    ["resultBuffer", beet.uniformFixedSizeArray(beet.u8, 32)],
    ["result", beet.u128],
    ["lastTimestamp", beet.i64],
    ["authority", beetSolana.publicKey],
    ["vrf", beetSolana.publicKey],
  ],
  VrfClient.fromArgs,
  "VrfClient"
);
