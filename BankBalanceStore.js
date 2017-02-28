import {EventEmitter} from 'fbemitter';
import AppDispatcher from './AppDispatcher';
import bankConstants from './constants';
let balance=0;
let __emitter = new EventEmitter();


class BankBalanceStore extends EventEmitter{

    getBalance(){
        return balance;
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
const bankBalancestore =new BankBalanceStore();
AppDispatcher.register(bankBalanceStore.handleAction.bind(bankBalanceStore));
export default BankBalanceStore;
