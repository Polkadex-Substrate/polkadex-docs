---
id: introductionOrderbook
title: Introduction
---
![img](/img/orderbookTitleBanner.jpg)
**Polkadex Orderbook is a non-custodial, layer two based orderbook exchange on top of the Polkadex Network**.

Polkadex Orderbook is made for the traders who trade in centralized exchanges by giving up control of their assets and trusting a centralized operator. We believe Polkadex Orderbook can improve the situation of those traders by decentralizing the custody of assets and at the same time providing the same comforts and convenience of a normal centralized exchange.

Polkadex Orderbook implements a layer two Trusted Execution Environment (TEE) on top of Polkadex that allows an operator to maintain orderbook at the same time making sure the operator cannot cheat since the results produced by the TEE contains a cryptographic proof. In the event of tampering, the blockchain can invalidate the proof thereby not accepting the tampered state submitted by the Operator. The funds of the user always stays in the native blockchain and is controlled by the user's private key. The layer two solution only allows to place and execute trades. Balances are not transferrable in layer two. It ensures that only the trader's private key can initiate a balance transfer.

---

## Polkadex Orderbook Parts
Polkadex Orderbook contains three parts: 
* **Polkadex Network**: This is the native blockchain that contains the Polkapool and secures the actions of Polkadex Orderbook.

* **Trusted Execution Environment (TEE)**: TEE is a technology invented by Intel that allows modern CPUs to have an isolated section that is independent of Operating System, BIOS and other core components of a computer. The main advantage is that the computation being executed in this TEE is verified by the blockchain and any tampering in the logic will result in blockchain rejecting the TEE. TEE handles the balance state management of users in the orderbook. It prevents theft of funds, verifies the matched trades provided by the Orderbook Engine, settles trades and enables the trader to reserve and unreserve his assets on the native blockchain.

* **Orderbook Engine**: It maintains a high performance orderbook and matches trades and provide them to TEE to verification and trade settlement.


The following diagram depicts how Polkadex Orderbook executes the trades.
![img](/img/orderbookBanner.jpg)

---

## Key Features and Functionalities

* **Polkadex Orderbook allows traders to register multiple hot wallets** (like browser extension based wallets, mobile phones, iPads, trading bots, etc.) on chain to enable these wallets to place trades using their funds. The main point to note is  these hot wallets CANNOT withdraw or transfer funds to another account. They can only place, edit or cancel trades in orderbook. It provides a lot of convenience and at the same time security for the trades while trading in Polkadex Orderbook.

* **Polkadex Orderbook allows traders to delegate their assets to a third party** (Assets management ) for executing algorithmic trading with trader's asset and making trader profits without trusting them with full control of trader's assets.

* **Polkadex Orderbook allows institutions to execute bulk buy and bulk sell orders**.

* **Traders can leave their assets in the exchange without the worry of exchange getting hacked**, thereby removing the transaction fees associated with moving in and out the funds from the exchange every time they need to trade.

* **Polkadex Orderbook will support all the favorite trading bots** that the community uses.

* **Polkadex Orderbook users can pay fees in Polkadex**.