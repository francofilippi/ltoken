import React, { useState } from "react";
import { useWallet, UseWalletProvider } from 'use-wallet'
import { ethers } from 'ethers'
import tlt_icon from '../assets/images/coins/tlt.png'
import bnb_icon from '../assets/images/coins/bnb.svg'
import Loader from "react-loader-spinner";
import { Waypoint } from 'react-waypoint';
import { Animated } from "react-animated-css";


const PurchaseBox = () => {
    const wallet = useWallet()
    const [output, setOutput] = useState(undefined)
    const [inputBnb, setInputBnb] = useState(undefined)
    const [loadingTsx, setLoadingTsx] = useState(undefined)
    const [animar, setAnimar] = useState([])

    const connectWallet = async (e) => {
        e.preventDefault();
        await wallet.connect()
    }

    const buyTokens = async (tokenAmount) => {
        setLoadingTsx(true)
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            tokenAmount = ethers.utils.parseUnits(tokenAmount, 'ether').toHexString()
            // Acccounts now exposed
            const params = [{
                from: wallet.account,
                to: '0x8D88E4262F281a1910b19D46b8549e4150A9f017',
                value: tokenAmount
            }];

            const transactionHash = await provider.send('eth_sendTransaction', params)
            console.log('transactionHash is ' + transactionHash);
            setLoadingTsx(false)
        }
    }

    return (
        <React.Fragment>
            <section id="PurchaseBox">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-8 col-md-12 offset-lg-2">
                            <Waypoint
                                onEnter={() => setAnimar([...animar, 1])}
                            />
                            <Animated animationIn="fadeInUp" isVisible={animar[0] ? true : false} animationInDelay="400">
                                <div className="title_dark">
                                    <span>Purchase tlt tokens</span>
                                </div>
                                <h1><span>Presale</span> Dashboard</h1>
                            </Animated>
                        </div>
                    </div>

                    <div className="row small_space benefit_wrap">
                        <div className="col-lg-12">
                            <Waypoint
                                onEnter={() => setAnimar([...animar, 2])}
                            />
                            <Animated animationIn="pulse" isVisible={animar[1] ? true : false} animationInDelay="1000">
                                <div className="card">

                                    <div className="card-body">
                                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                                            <h5 style={{ 'color': 'black' }}>GET TLT Tokens</h5>
                                            <h6 style={{ 'color': 'darkgrey' }}>Minimum Purchase 0.1 BNB = 100.000 TLT</h6>
                                        </div>


                                        {wallet.status === 'connected' ? (
                                            <div className="d-flex flex-wrap justify-content-between align-items-center">
                                                <div>
                                                    <h6>Account: <span className="d-inline-block text-truncate addressdir">{wallet.account}</span> </h6>
                                                    <h6>Balance: {ethers.utils.formatEther(wallet.balance, "ether")}</h6>
                                                </div>
                                                <button className="btn btn-primary btn-lg" onClick={() => wallet.reset()}>disconnect</button>
                                            </div>) : (
                                            <div className="d-flex flex-wrap justify-content-between align-items-center">
                                                <div>
                                                    <h6>Account: Not detected </h6>
                                                    <h6>Balance: - </h6>
                                                </div>
                                                <button className="btn btn-primary btn-lg" onClick={connectWallet}>Connect MetaMask</button>
                                            </div>
                                        )}




                                        <div className="mb-3">
                                            <form className="mb-3" onSubmit={(event) => {
                                                event.preventDefault();
                                                let tokenAmount
                                                tokenAmount = inputBnb.value.toString()
                                                buyTokens(tokenAmount)

                                            }}>
                                                <div>
                                                    <label className="float-left"><b>Input</b></label>
                                                    {/* <span className="float-right text-muted">
                                                        <h6>Balance: <span> </span></h6>
                                                    </span> */}
                                                </div>
                                                <div className="input-group mb-4">
                                                    <input
                                                        type="text"
                                                        onChange={(event) => {
                                                            const tokenAmount = inputBnb.value.toString()
                                                            setOutput(tokenAmount * 1000000)
                                                        }}
                                                        ref={(input) => { setInputBnb(input) }}
                                                        className="form-control form-control-lg"
                                                        placeholder="0"
                                                        required />
                                                    <div className="input-group-append">
                                                        <div className="input-group-text">
                                                            <img src={bnb_icon} height='32' alt="" />
                                                            &nbsp;BNB
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="float-left"><b>Receive</b></label>
                                                </div>
                                                <div className="input-group mb-2">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg"
                                                        placeholder="0"
                                                        value={output}
                                                        disabled
                                                    />
                                                    <div className="input-group-append">
                                                        <div className="input-group-text">
                                                            <img src={tlt_icon} height='32' alt="" />
                                                            &nbsp;TLT
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-5">
                                                    <span className="float-left text-muted">Exchange Rate</span>
                                                    <span className="float-right text-muted">0.1 BNB = 100.000 TLT</span>
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-block btn-lg">
                                                    {loadingTsx ? <Loader
                                                        type="Circles"
                                                        color="#6669c5"
                                                        height={25}
                                                        width={25}
                                                    /> : 'Swap'}
                                                </button>
                                                <span className="d-flex justify-content-center" style={{ 'color': 'black', 'fontSize': 'small' }}>*tokens will be credited
                                                    to your wallet within the next 24 hours</span>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </Animated>

                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default () => (
    <UseWalletProvider
        chainId={56}
        connectors={{
            // This is how connectors get configured
            provided: { provider: window.cleanEthereum },
        }}
    >
        <PurchaseBox />
    </UseWalletProvider>
)