module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Overview',
      items: ['vision', 'whatispolkadex', 'whyPolkadot' , 'polkadexTeam', 'polkadexCommunity']
    },
    {
      type: 'category',
      label: 'Polkadex Orderbook',
      items: [{
        type: 'category',
        label: 'FAQ',
        items: ['orderbookPolkadexFAQWallets','orderbookPolkadexFAQBalances', 'orderbookPolkadexFAQTransfer'],
      }]
    },
    {
      type: "category",
      label: "Orderbook Guide",
      items: [{
        type: 'category',
        label: 'How to trade on Polkadex Orderbook?',
        items: ['orderbookPolkadexFAQHowToTradeStep1', "orderbookPolkadexFAQHowToTradeStep2","orderbookPolkadexFAQHowToTradeStep3","orderbookPolkadexFAQHowToTradeStep4","orderbookPolkadexFAQHowToTradeStep5","orderbookPolkadexFAQHowToTradeStep6"],
      },
      {
        type: 'category',
        label: 'How to transfer funds from other networks to Polkadex (THEA)?',
        items: ["polkadexOrderbookFAQHowToTransferDeposits", "polkadexOrderbookFAQHowToTransferWithdrawals"],
      }
    ],
    
    },
    {
      type: 'doc',
      id: 'tokenEconomics'
    },
    {
      type: 'category',
      label: 'Polkadex Network & Ecosystem',
      items: ['polkadexNetworkEcosystemGovernance', 'polkadexNetworkEcosystemStaking', 'polkadexNetworkEcosystemParachain', ]
    },
    {
      type: 'category',
      label: 'Indexers',
      items: ['indexersIntro', 'indexersSubQuery' ]
    },
  ]
};
