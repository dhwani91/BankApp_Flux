import AppDispatcher from './AppDispatcher';
import bankConstants from './constants';
let bankActions={
    createAccount(amount){
        AppDispatcher.dispatch({
            type:bankConstants.CREATED_ACCOUNT,
            amount:0
            });

    },
    depositeIntoAccount(amount){
        AppDispatcher.dispatch({
            type:bankConstants.DEPOSITED_INTO_ACCOUNT,
            amount:amount
        });
    },
    withdrawFromAccount(amount){
        AppDispatcher.dispatch({
            type:bankConstants.WITHDREW_FROM_ACCOUNT,
            amount:amount
        });
    }

}
export default BankActions;