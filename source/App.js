import React, { Component } from 'react';
import { render } from 'react-dom';
import BankActions from './BankActions';
import BankBalanceStore from './BankBalanceStore';


class App extends Component{
    constructor(){
        super();
        this.state={
            balance:BankBalanceStore.getBalance
        }
    }
    ComponentWillMount(){
        BankBalanceStore.on("change",()=>{
            this.setState={
                balance:BankBalanceStore.getBalance()
            }
        })

    }
    deposit(e) {
        console.log(this.refs.amount.value)
        if (e) {
            e.preventDefault();
        }

        BankActions.depositeIntoAccount(Number(this.refs.amount.value));
        this.refs.ammount.value = '';

    }

    withdraw() {
        BankActions.withdrawFromAccount(Number(this.refs.amount.value));
        this.refs.ammount.value = '';
    }
    render(){
        return(
            <div>
            <header>FluxTrust Bank</header>
        <h1>Your balance is ${(this.state.balance)}</h1>
        <div className="atm">
            <input type="text" placeholder="Enter Ammount" ref="amount" />
            <br />
            <button onClick={this.withdraw.bind(this)}>Withdraw</button>
        <button onClick={this.deposit.bind(this)}>Deposit</button>
        </div>
        </div>
        );
    }
}
render(<App />, document.getElementById('root'));