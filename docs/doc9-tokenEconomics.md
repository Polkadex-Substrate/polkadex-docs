---
id: tokenEconomics
title: Token Economics
---

## Overview

Polkadex is building a fully decentralized peer-to-peer orderbook based cryptocurrency exchange on the Polkadot network. We are supported and funded by Web3 Foundation.

Polkadex Testnet was launched in Q4 2020. For the Mainnet launched planned in Q2 2021 Polkadex plans to issue utility token. It will be used to govern the network and conduct trades on the Polkadex exchange platform. We aim to manage and distribute the tokens in a way that is beneficial for early investors and the development of the exchange.

In the following sections, we present the key characteristics and analysis of the tokenomics and introduce the monetary policy details about management and distribution of tokens. The derivation of the fundamental pricing equation can be found in the appendix.

---

## Distribution of Tokens

| Distribution of tokens                | Share         |  Tokens       |
| ------------------------------------- | ------------- | ------------- |
| Founders and Team                     | 9%            | 1,800,000     |
| Seed Round                            | 7%            | 1,400,000     |
| Strategic Round                       | 8%            | 1,600,000     |
| Private Round                         | 10.193%       | 2,038,600     |
| Treasury                              | 41%           | 8,200,000     |
| Liquidity Mining                      | 10%           | 2,000,000     |
| Advisory                              | 6%            | 1,200,000     |
| Marketing, Ecosystem and Partnership  | 6.807%        | 1,361,400     |
| Community Round                       | 2%            | 400,000       |

## Fees Collected by Polkadex Exchange
Polkadex collects 0.2% of the trading volume in orderbook exchange and 0.3% of the trading volume in the swap pool to fund the platform, reward liquidity providers and decrease token supply. The 0.3% of the swap fee is broken down into:

* **0.05%** that is available for the Treasury and used for ecosystem development, burning and decreasing the token supply over time.

* **0.25%** that goes to the liquidity provider.

## Staking
Polkadex uses NPoS (Nominated Proof-of-Stake) as the mechanism for selecting the validator set. It is designed with the roles of **validators** and **nominators**, to maximize chain security. Network participants interested in maintaining the network can run a validator node. At genesis, Polkadex will have a limited number of slots available for these validators. However, we aim to increase our network to about 300 validators over time.

## Validator incentive, Liquidity Mining Incentive and Inflation
Validators are incentivized to stake tokens based on a dynamic rule. Liquidity providers are incentivized with tokens based on the following rules:

* Polkadex token (PDEX) is inflationary. There is no maximum number of PDEX as in Bitcoin. Inflation is designed to be 10% in the first year, with validator rewards being a function of the amount staked and the remainder going to liquidity mining.
  * X-axis: Proportion of PDEX staked
  * Y-axis: Inflation, annual percentage
  * Blue line: Inflation rewards to stakers and liquidity providers
  * Green line: Staker return/2

* 50% of the block reward is given to the liquidity mining algorithm.

* 50% of the block reward is given to the liquidity mining algorithm.

Since Polkadex has decided to use up 0.1% of the swap fees to burn tokens, supply is expected to decrease over time. Tokenomics of Polkadex is based on theoretical considerations and numerical simulations. We provide more details in the following sections. Polkadex will burn not more than 2% of the supply of the previous month to prevent price shocks.