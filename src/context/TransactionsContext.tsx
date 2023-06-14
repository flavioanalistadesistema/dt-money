import { createContext, useEffect, useState } from "react";

interface Transaction {
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome';
    createadAt: string;
}

interface ContextType {
    transactions: Transaction[]
}

export const TransactionContext = createContext({} as ContextType)

export function TransactionProvider({ children }: any) {  
    
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function loadTransactions(){

        const resp = await fetch('http://localhost:3333/transactions')
            .then(response => response.json())
            setTransactions(resp)
        }

    useEffect(() => {
        loadTransactions()
    }, [])
    
    return (
        <TransactionContext.Provider value={{ 
                transactions            
            }}>
            {children}
        </TransactionContext.Provider>
    )
}




