"use client";
import { useState } from "react";
import { useWalletKit } from "@mysten/wallet-kit";
import { Wallet } from "lucide-react";

export default function ConnectSuiWallet() {
  const shortenAddress = (addr: string) =>
    `${addr.slice(0, 6)}...${addr.slice(-4)}`;

  const { currentAccount, connect, disconnect, isConnected } = useWalletKit();
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async () => {
    try {
      setError(null);
      // ✅ You only pass the wallet name here
      await connect("Slush", { silent: false });
    } catch (err) {
      alert("Wallet connection error:", err);
      setError("Failed to connect wallet");
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (err) {
      console.error("Wallet disconnection error:", err);
    }
  };

  return (
    <button
      onClick={isConnected ? handleDisconnect : handleConnect}
      className="flex items-center space-x-2 px-4 py-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md"
    >
      <Wallet size={20} />
      <span>
        {isConnected && currentAccount
          ? shortenAddress(currentAccount.address)
          : "Sui Wallet"}
      </span>
    </button>
  );
}
