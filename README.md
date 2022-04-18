# Switchboard VRF Cross Program Invocation Example

Example repo

## Devnet Setup

```
npm i
find secrets/payer-keypair.json || solana-keygen new -s --no-bip39-passphrase --outfile secrets/payer-keypair.json
solana airdrop 1 secrets/payer-keypair.json
solana airdrop 1 secrets/payer-keypair.json
solana airdrop 1 secrets/payer-keypair.json
anchor build
solana-keygen pubkey target/deploy/anchor_vrf_example-keypair.json
```

Note the program ID.

In the following files, replace the program ID from above:]

- `programs/anchor-vrf-example/src/lib.rs`
- `Anchor.toml`
- `solita.ts`

Rebuild and deploy the program

```
anchor build
anchor deploy
```

## Localnet Testing

In `Anchor.toml`, change the cluster to localnet.

```toml
[provider]
cluster = "localnet"
wallet = "secrets/payer-keypair.json"
```

Create a localnet switchboard environment

```
npx sbv2 localnet:env --keypair secrets/payer-keypair.json
```

In a new shell, start the local validator using the script output from above

```
chmod +x ./start-local-validator.sh
./start-local-validator.sh
```

In a new shell, start the local Switchboard oracle

```
chmod +x ./start-oracle.sh
CLUSTER=localnet ./start-oracle.sh
```

Run the anchor test using the already running localnet validator

```
anchor build && anchor deploy
anchor test --skip-local-validator
```
