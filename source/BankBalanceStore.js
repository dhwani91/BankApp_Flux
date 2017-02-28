import {EventEmitter} from 'fbemitter';
import AppDispatcher from './AppDispatcher';
import bankConstants from './constant';
let balance = 0;
let __emitter = new EventEmitter();


class BankBalanceStore extends EventEmitter{
constructor(){
    super();
    this.state={
        balance :balance
    }

}

    getBalance(){
        return this.state.balance;
    }
    creatAccount(amount){
        balance=0;
        this.emit("change");
    }
    widthraw(amount){
        balance=balance - amount;
        this.emit("change");
    }
    deposit(amount){
        balance=balance + amount;
        this.emit("change");

    }
    handleActions(action){
        switch(action.type){
            case "CREATED_ACCOUNT":{
                this.creatAccount(action.amount)
            }
            case "WITHDREW_FROM_ACCOUNT" :{
                this.widthraw(action.amount)
            }
            case "DEPOSITED_INTO_ACCOUNT" :{
                this.deposit(action.amount)
            }
        }

    }

}

const bankBalancestore = new BankBalanceStore;
BankBalanceStore.dispatchToken = AppDispatcher.register(bankBalancestore.handleActions(bankBalancestore));
export default BankBalanceStore;
