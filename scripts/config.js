module.exports = {
    ETHEREUM_RPC: "wss://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY",
    BRIDGES: [
        {
            name: "Arbitrum L1 Gateway",
            address: "0xcEe284F754E854890e311e3280b767F80797180d",
            topic: "DepositInitiated" 
        },
        {
            name: "Optimism Standard Bridge",
            address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1",
            topic: "ETHBridgeInitiated"
        }
    ]
};
