---
id: vision
title: Our Vision for Polkadex
sidebar_label: Vision
---
We believe that trading products should be taken seriously and should be provided a dedicated platform. We believe that there are two kinds of markets, namely,

## Non-Orderbook Market
These are markets that completely depend on passive market making and is controlled by pure supply and demand. The major examples for this are Uniswap, Balancer, Sushiswap, etc.

These markets are always prone to price shocks, frontrunning, price slippage and arbitraging.  Traders have to understand the fact that price shocks, price slippage and arbitraging are inherent properties of this market and if anyone claims that they solved this in an automated market making model, then you are being fooled. Let us explain,

* **High Price Slippage**: It happens when a trader places a trade that is comparatively larger compared liquidity available in the market. This is a normal scenario, in layman's terms, If you are trying to buy more apples in a limited supply market, indeed the price of the apple will go up. Suppose if we don't allow the seller to increase the price of the apple then the seller is losing value by providing apples to market compared to the situation in which he just hold on to his apples. 

  Similarly, the AMM increases/decreases the price of an asset to protect the liquidity provider in case of a mass buy or sell in the market. This is clearly depicted in Uniswap model by limiting the price slippage tolerance.

* **Arbitraging**:  It's simply is an mechanism to level the swap price with the market price of the given asset. It comes with a cost, whenever an arbitrageur executes an opportunity, he either buys the assets at a lower price or sells the assets at a higher rate and executing the opposite trade in another market. Thereby making a profit doing so. Here the liquidity providers are paying the profit taken by arbitrageur but if somebody doesn't make arbitrage then AMM pool will continue to sell/buy at a skewed price.

  There is no automated market making model that is possible without arbitraging.

* **Frontrunning**: It is an issue related to the blockchain and not the AMM pool. In Ethereum like blockchains, the priority of transactions is decided in the decreasing order of transaction fee included so if someone in the network sees that you are buying a lot of asset ABC then they can send a transaction with higher fees to drive up the swap price so when your trade executes you will end up buying at a higher price. 

  Polkadex solves this problem by removing the transaction fee factor since no one is paying any transactions fees the swaps are treated in a first come first serve manner there by completely eliminating the frontrunning problem. 

* **High Swap Fees**: Generally all the new projects, will claim that the have the lowest transaction fees possible, but in that case the investors of the project requires the token value to go higher, even the team behind it wants the same thing. If the token value goes up then, the transaction fees also goes up since the payment is done in the native token. So these projects can claim low fees only for a short amount of time.

  The only way to solve this problem is to decouple the transaction fees from native token so price changes in native token doesn't affect the swap prices. Polkapool does this by removing transaction fee and implementing a crypto economic logic to prevent Distributed Denial of Service Attacks.


## Orderbook Market

These are markets require active market making and can respond to change in global sentiments on traded assets within milliseconds. Orderbooks are the perfect trading vehicles since they can provide the minimum price slippage, no arbitraging and can avoid frontrunning.

There are two participants in Orderbook, the maker and taker. 

1. Maker is the one who creates the market by putting buy and sell orders.
2. Taker is the trader who consumes these open orders created by the maker.

The main technical requirements for both participants are as follows,

1. **Latency**: The time taken to list/edit an order in the orderbook. In a centralized exchange it is around 20 milliseconds.
2. **Security**: The funds in the orderbook should never be hacked and must be controlled by the owner of the private key.
3. **KYC Data Security**: Traders are comfortable to share the KYC data but they don't want their data to be misused without their permission.

Polkadex Orderbook provides the exact same requirements by providing a layer two system on top of Polkadex Network which can accept trades in 20ms, can execute more than 500,000 trades per second, and the funds are always controlled and secured by the owner's private key. Polkadex implements decentralized KYC that makes sure the KYC of the customer is stored with the customer and is never shared with Polkadex. Polkadex receives a cryptographic proof that KYC was done. In this way, Polkadex preserves trader privacy.