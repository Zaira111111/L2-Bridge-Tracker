const { ethers } = require("ethers");
const { ETHEREUM_RPC, BRIDGES } = require("./config");

async function startTracking() {
    const provider = new ethers.providers.WebSocketProvider(ETHEREUM_RPC);
    console.log("🚀 Starting L2 Bridge Monitor...");

    BRIDGES.forEach((bridge) => {
        console.log(`📡 Monitoring ${bridge.name} at ${bridge.address}`);
        
        const filter = {
            address: bridge.address,
        };

        provider.on(filter, (log) => {
            console.log(`\n🔔 New Bridge Activity on ${bridge.name}!`);
            console.log(`Transaction Hash: ${log.transactionHash}`);
            // Is data ko aap JSON file mein save bhi kar sakte hain
        });
    });
}

startTracking().catch(console.error);
