import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Troll GiRL",
  description:
    "Ticker Name: $TrollG Total Supply: 55,000,000,000,000 90% circulating / 5% MW / 5% Team Tax: 5/5 Buy (2 - liquidity, 2 - burning, 1 - $Troll Deployer Wallet) Sell (2 - liquidity, 2 - burning, 1 - $Troll Deployer Wallet) Max Wallet: 2%",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>
        <div >
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
