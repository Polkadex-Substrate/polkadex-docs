---
id: tokenEconomics
title: Token Economics
---

## Overview

Polkadex builds a fully, decentralized, peer to peer, orderbook based cryptocurrency exchange on the Polkadot network. Recently, the exchange platform that is supported and funded by the Web3 Foundation launched its testnet. For the main net, Polkadex plans to issue an utility token that will be used to govern the network and will be required to conduct trades on the exchange platform. Polkadex aims to manage and distribute the tokens such that it benefits early investors and the development of the exchange.

The paper is structured as follows: First, we present the key characteristics of the tokenomics. In section two, we explain the model used to analyse the tokenomics. In section three, we will introduce the monetary policy details, i.e., how tokens are managed and distributed. The derivation of the fundamental pricing equation is presented in the appendix.

---

## Distribution of Tokens

| Distribution of tokens                | Share         |  Tokens       |
| ------------------------------------- | ------------- | ------------- |
| Founders and Team                     | 9%            | 1,800,000     |
| Seed Round                            | 7.00%         | 1,400,000     |
| Strategic Round                       | 8.00%         | 1,600,000     |
| Private Round                         | 10.193%       | 2,038,600     |
| Treasury                              | 41%           | 8,200,000     |
| Liquidity Mining                      | 10%           | 2,000,000     |
| Advisory                              | 6%            | 1,200,000     |
| Marketing, Ecosystem and Partnership  | 6.807%        | 1,361,400     |
| Community Round                       | 2%            | 400,000       |

## Fees collected by the exchange.

In addition, the tokenomics includes these key elements:

* Polkadex collects 0.2% of the trading volume in orderbook exchange and 0.3% of the trading volume in the swap pool to fund the platform, to reward liquidity providers and to decrease token supply.
* From the 0.3% of the swap fee,
* **0.05% is available to the Treasury.** It is used for burning, ecosystem development and to decrease the token supply over time.
* **0.25% is given to the liquidity provider.**

## Staking
Polkadex uses NPoS (Nominated Proof-of-Stake) as its mechanism for selecting the validator set. It is designed with the roles of **validators** and **nominators**, to maximize chain security. Actors who are interested in maintaining the network can run a validator node. At genesis, Polkadex will have a limited number of slots available for these validators, but this number will grow over time to around three hundred.

## Validator and Liquidity Mining incentive/Inflation
Validators are incentivized to stake tokens based on a dynamic rule. Liquidity providers are incentivized with tokens based on the same set described below.

* PDEX is inflationary; there is no maximum number of PDEX as in Bitcoin. Inflation is designed to be 10% in the first year, with validator rewards being a function of amount staked and the remainder going to liquidity mining.
  * **x-axis**: Proportion of PDEX staked
  * **y-axis**: Inflation, annualized percentage
  * **Blue line**: Inflation rewards to stakers and liquidity providers
  * **Green line**: Staker return/2

* 50% of the block reward is given to liquidity mining algorithm.

* 50% of the block reward is given to validators.

* Since Polkadex has decided to use up 0.1% of the swap fees to burn tokens, supply is expected to decrease over time. Tokenomics of Polkadex is based on theoretical considerations and numerical simulations. We provide the details in the following sections. Polkadex will burn not more than 2% of the supply of the previous month to prevent price shocks.