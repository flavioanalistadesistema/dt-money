import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction{
    id: string;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionsContextType {
    transactions: Transaction[],
    feacthTransaction: (query?: string) => Promise<void>
}

interface TransactionsProviderProps{
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({children}: TransactionsProviderProps) {
    
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function feacthTransaction(query?: string) {

        const response = await api.get('/transactions', {
            params: {
                q: query
            }
        })
        setTransactions(response.data)
    }

    useEffect(() => {
        feacthTransaction()
    }, [])

    return (
        <TransactionsContext.Provider value={{
            transactions,
            feacthTransaction,
            }}>
            {children}
        </TransactionsContext.Provider>
    )
}