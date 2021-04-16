---
id: introductionOrderbook
title: Introduction
---

![img](/img/orderbookTitleBanner.jpg)
Polkadex Orderbook is a non-custodial Layer 2 based orderbook exchange built on top of the Polkadex Network. While working on Polkadex Orderbook we thought about the traders on traditional centralised exchanges who enjoy certain benefits of the platforms but have to risk by putting a lot of trust in a centralized operator and give away control of their assets. 

Polkadex Orderbook keeps the convenience of a centralised exchange but eliminates their bottlenecks by decentralizing the custody of assets. Polkadex Orderbook implements a Layer 2 Trusted Execution Environment (TEE) on top of Polkadex. This mechanism allows an operator to maintain the orderbook and controls that the operator cannot cheat since the results produced by the TEE contain cryptographic proof. In the event of tampering, the blockchain can invalidate the proof thereby not accepting the tampered state submitted by the Operator. The funds of the user always stay in the native blockchain and are controlled only by the user's private key. The Layer 2 solution only allows to place and execute trades, but not to transfer any balances. It additionally ensures that only the trader's private key can initiate a balance transfer.

---

## Polkadex Orderbook Parts
Polkadex Orderbook contains three core parts: Polkadex Network, Trusted Execution Environment and Orderbook Engine.

* **Polkadex Network** is the native blockchain that contains the Polkapool and secures the actions of Polkadex Orderbook.

* **Trusted Execution Environment (TEE)** is a technology invented by Intel that allows modern CPUs to have an isolated section independent of the Operating System, BIOS and other core components of a computer. Its main advantage is that the computation executed in TEE is verified by the blockchain and any tampering in the logic will result in the blockchain rejecting the TEE. TEE handles the balance state management of users in the Orderbook. It prevents theft of funds, verifies the matched trades provided by the Orderbook Engine, settles trades and enables the trader to reserve and unreserve assets on the native blockchain.

* **Orderbook Engine** maintains a high-performance Orderbook, matches trades and provides them with TEE for verification and trade settlement. 


The diagram below shows how Polkadex Orderbook executes the trades.
![img](/img/orderbookBanner.jpg)

---

## Key Features and Functionalities

* **Polkadex Orderbook allows traders to register multiple hot wallets on-chain** (like the ones based on browser extensions, mobile phones, iPads, trading bots, etc.) to enable these wallets to place trades using funds in them. It is important to note that these hot wallets CANNOT withdraw or transfer funds to another account. They can only place, edit or cancel trades in the Orderbook. Polkadex Orderbook makes the trading process very convenient and secure at the same time.

* **Using Polkadex Orderbook traders can delegate their assets to a third party** (asset management) to profit from algorithmic trading without trusting the third parties with full control over the trader's assets.

* **Polkadex Orderbook allows institutions to execute bulk-buy and bulk-sell orders**.

* **Traders can leave their assets in the exchange without worrying that the exchange might be hacked**. Thereby traders can save on fees associated with moving their funds in and out of the exchange every time they need to trade. 

* **Polkadex Orderbook will support all the favourite trading bots of our community**. 

* **Polkadex Orderbook users can pay fees in Polkadex token (PDEX)**.