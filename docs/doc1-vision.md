---
id: vision
title: Our Vision for Polkadex
sidebar_label: Vision
---

We believe that the trading environment is the most important part of the crypto industry growth and there is a need for a dedicated platform for trading products. In our view markets can be divided into two categories: Non-Orderbook and Orderbook.

## Non-Orderbook Market
These markets depend on passive market making and are controlled purely by supply and demand. Some of the well-known examples of such markets are Uniswap, Balancer and Sushiswap. 

Non-Orderbook markets are always prone to such negative events as price shocks and slippage, frontrunning and arbitraging. Traders who use these platforms don't have another choice but to agree with the inherent negative properties of these markets. Currently, there are no platforms that can prove they eliminated the issues mentioned above in an automated market-making model

Let us explain the terms here.

* **High Price Slippage** happens when the user places a trade that is larger than the liquidity available in the market. Using a simple analogy, if you are trying to buy more apples in a market with limited supply, the price of one apple will increase. On the other hand, if we don't allow the seller to increase the price of the apples, then the seller is losing value by providing apples to the market and he has more incentive to just hold on to his apples. Similarly, the AMM increases or decreases the price of an asset to protect the liquidity provider in case of mass buy or sell events in the market. This is outlined in the Uniswap model though limits for price slippage tolerance. 

* **Arbitraging** is a mechanism used to level the swap price with the market price of the given asset. Whenever an arbitrageur makes a profit from buying the asset at a lower price on one market and selling the asset at a higher price in another market. The liquidity providers are paying the arbitrageur's profit, however, if somebody doesn't execute arbitrage then the AMM pool will continue to trade at a skewed price. There is no automated market-making model that can function without arbitraging. 

* **Frontrunning** is an issue related to the blockchain and not the AMM pool directly. Ethereum-like blockchains prioritise transactions with higher gas fees. As blockchain is transparent anyone in the network can see other transactions in the queue. If someone in the network notices that you are buying a lot of asset X they can set higher gas fees for their transaction. In this case, your swap price will go up and you will end up purchasing the asset at a higher swap price. 
  Polkadex solves the problem of frontrunning by removing the transaction fees. Since no one is paying any transactions fees the swaps are treated on a first-come-first-serve basis. 

* **High Swap Fees** are pretty self-explanatory. Generally, each new project claims they have the lowest transaction fees relative to established projects. Due to the nature of the cryptocurrency industry, the platform native token price will go up in value over time. As transaction fee is the percentage of the token price, a price increase will lead to higher transaction fees. Thus, these projects can maintain low fees only for a short time. The only way to solve this problem is to untie transaction fees from the native token. If there is no connection price changes in the native token will not affect the swap fees. 

  Polkapool addresses this issue by fully removing transaction fees and implementing a crypto-economic logic to prevent Distributed Denial of Service Attacks.

## Orderbook Market

Orderbook markets require active market-making and can respond to any change in global sentiments on traded assets within milliseconds. Orderbooks are the perfect trading vehicles because they can provide the minimum price slippage and avoid arbitraging and frontrunning.                                         
There are two participants in the Orderbook market, maker and taker. Maker creates the market by placing buy and sell orders. Taker consumes open orders created by the maker. The main technical requirements for both participants are latency, security and full KYC.

Latency is the time taken to place or edit an order in the orderbook. It takes about 20 milliseconds on a centralized exchange. On the security side of the question, the funds in the orderbook should never be hacked and must be controlled by the owner of the private key. Each market participant has to go through a thorough KYC process for data security. The issue here is that while the traders might be comfortable sharing their data for KYC, they definitely don't want their data to be misused without their permission. 

Polkadex Orderbook offers the benefits of the traditional centralised orderbook exchanges by providing a Layer 2 system on top of Polkadex Network. Polkadex Orderbook can accept trades in 20ms and execute more than 500,000 trades per second. Moreover, traders are always in full control of their funds and enjoy the highest level of security. Only the owner can access the funds using private keys. Polkadex implements decentralized KYC, where data is stored with the customer and is never shared with Polkadex. Polkadex receives only cryptographic proof that KYC was done. In this way, we preserve the privacy of our users.