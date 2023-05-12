import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction{
    id: string;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionsContextType {
    transactions: Transaction[]
}

interface TransactionsProviderProps{
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({children}: TransactionsProviderProps) {
    
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function getTransaction() {
        const response = await fetch('http://localhost:3333/transactions')
        const data = await response.json()
        setTransactions(data)
    }

    useEffect(() => {
        getTransaction()
    }, [])

    return (
        <TransactionsContext.Provider value={{transactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}