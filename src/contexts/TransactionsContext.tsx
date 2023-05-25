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

        const url = new URL('http://localhost:3333/transactions')

        if(query) {
            url.searchParams.append('q', query)
        }

        const response = await fetch(url)
        const data = await response.json()
        setTransactions(data)
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