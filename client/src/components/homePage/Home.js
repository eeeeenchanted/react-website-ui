import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Welcome</h1>
                    <p className="home">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        Cryptocurrencies record transactions in a decentralized data
                        structure called a blockchain. Two of the most popular
                        cryptocurrencies, Bitcoin and Ethereum, support the fea-
                        ture to encode rules or scripts for processing transactions.
                        This feature has evolved to give practical shape to the ideas
                        of smart contracts, or full-fledged programs that are run on
                        blockchains. Recently, Ethereum’s smart contract system
                        has seen steady adoption, supporting tens of thousands of
                        contracts, holding millions dollars worth of virtual coins.
                        In this paper, we investigate the security of running smart
                        contracts based on Ethereum in an open distributed network
                        like those of cryptocurrencies. We introduce several new se-
                        curity problems in which an adversary can manipulate smart
                        contract execution to gain profit. These bugs suggest subtle
                        gaps in the understanding of the distributed semantics of the
                        underlying platform. As a refinement, we propose ways to
                        enhance the operational semantics of Ethereum to make con-
                        tracts less vulnerable. For developers writing contracts for
                        the existing Ethereum system, we build a symbolic execution
                        tool called Oyente to find potential security bugs. Among
                        19, 366 existing Ethereum contracts, Oyente flags 8, 833 of
                        them as vulnerable, including the TheDAO bug which led
                        to a 60 million US dollar loss in June 2016. We also discuss
                        the severity of other attacks for several case studies which
                        have source code available and confirm the attacks (which
                        target only our accounts) in the main Ethereum network
                    </p>
                    <div className="ui horizontal divider">Other Websites </div>
                    <div className="ui three item secondary menu">                    
                        <a className="item">B站</a>
                        <a className="item">C站</a>
                        <a className="item">D站</a>
                    </div>
                    <br/><br/><br/><br/>
                </div>
            </div>
        );
    }
}

export default Home;
