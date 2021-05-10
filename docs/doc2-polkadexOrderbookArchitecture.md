---
id: orderbookArchitecture
title: Polkadex Orderbook Architecture
sidebar_label: Architecture
---

Polkadex can offer all of the above benefits thanks to a sophisticated technology stack. It is the first project that uses the Substrate Abstraction Layer for SGX technology to build a decentralized exchange, and one of the first use cases of this technology in general.

The architecture of the Polkadex Orderbook is unique because it is a combination of multiple technologies: blockchain, parachain, TEE, IPFS and other latest technologies available in the blockchain industry today.

Polkadex Orderbook consists of four core parts: Polkadex Network, Trusted Execution Environment, Orderbook Engine and IPFS

* **Polkadex Network** is the native blockchain that contains the Polkapool and secures the actions of Polkadex Orderbook.

* **Trusted Execution Environment (TEE)** is a technology invented by Intel that allows modern CPUs to have an isolated section independent of the Operating System, BIOS and other core components of a computer. Its main advantage is that the computation executed in TEE is verified by the blockchain and any tampering in the logic will result in the blockchain rejecting the TEE. TEE handles the balance state management of users in the Orderbook. It prevents theft of funds, verifies the matched trades provided by the Orderbook Engine, settles trades and enables the trader to reserve and unreserve assets on the native blockchain.

* **Orderbook Engine** maintains a high-performance Orderbook, matches trades and provides them with TEE for verification and trade settlement.

* **IPFS or Interplanetary File System** maintains a snapshot of the latest state of balance transfers. In case the hardware is corrupted or the network access is lost or if the operator itself is compromised or turns a bad actor, blockchain rejects all future transfers from the orderbook and returns the funds to its users within 12 seconds, the fastest recovery mechanisms available in the market today. This acts like an insurance policy for the entire exchange.

The diagram below shows how Polkadex Orderbook executes the trades.
![img](/img/orderbookBanner.jpg)
