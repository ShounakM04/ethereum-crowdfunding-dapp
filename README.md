# Ethereum Crowdfunding DApp

**Overview**

This project is an Ethereum-based decentralized application (DApp) for crowdfunding campaigns. It empowers users to create and contribute to campaigns directly through Ethereum smart contracts, ensuring transparency, security, and immutability.

**Features:**

- **Campaign Creation:** Effortlessly launch your crowdfunding campaign by specifying details like funding goal, deadline, and description.
- **Contribution:** Seamlessly contribute Ethereum to existing campaigns using your web3 wallet.
- **Campaign Management:** As a campaign creator, you have complete control: approve contribution requests, finalize successful campaigns, and distribute funds accordingly.
- **Campaign Tracking:** Gain valuable insights into campaign progress, contributions received, and overall campaign performance.

**Technologies Used:**

- **Ethereum:** The blockchain platform that serves as the foundation for secure and transparent smart contracts.
- **Solidity:** The high-level programming language used to craft smart contracts for your crowdfunding logic.
- **Web3.js:** The JavaScript library that bridges the gap between your DApp and the Ethereum blockchain.
- **Next.js:** The React framework that provides a robust and performant foundation for building your DApp's user interface.
- **Semantic UI React:** The UI framework that empowers you to create a user-friendly and visually appealing DApp interface.

**Getting Started:**

Excited to dive in? Follow these steps to get your development environment set up and running:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ShounakM04/ethereum-crowdfunding-dapp
   cd ethereum-crowdfunding-dapp

2. **Install Dependencies**
    ```bash
    npm install

3. **Configure Environment Variables**
    Create a .env file in the root directory of the project and    add the following environment variables:
    ```bash
    MNEMONIC="your_mnemonic_phrase"
    API_KEY="your_infura_api_key"

4. **Compile and Deploy**
        change the directory and compile and then deploy
    ```bash
    cd ethereum
    node compile.js
    node deploy.js

5. **Start the development server:**
    ```bash
    npm run dev
