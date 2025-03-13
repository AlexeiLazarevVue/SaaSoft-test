import {defineStore} from "pinia";
import type {AccountStoreState} from "../types/account.store.types.ts";
import {AccountTypes} from "../types/account.types.ts";

export const useAccountStore = defineStore('account', {
    state: () : AccountStoreState => ({
        accounts: JSON.parse(localStorage.getItem('accounts')) || []
    }),
    actions: {
        addNewAccount() {
            this.accounts.push({tags: [], type: AccountTypes.LDAB, password: null, value: ''})
        },
        saveAccount(index: number) {
            const savedAccounts = JSON.parse(localStorage.getItem('accounts')) || []
            savedAccounts[index] = this.accounts[index]

            localStorage.setItem('accounts', JSON.stringify(savedAccounts));
        },
        deleteAccount(accountIndex: number) {
            this.accounts = this.accounts.filter((account, index) => index !== accountIndex)
            let savedAccounts = JSON.parse(localStorage.getItem('accounts')) || []
            savedAccounts = savedAccounts.filter((account, index) => index !== accountIndex)

            localStorage.setItem('accounts', JSON.stringify(savedAccounts));
        }
    }
})