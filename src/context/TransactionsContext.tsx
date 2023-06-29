import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome';
    createadAt: string;
}

interface TransactionInput {
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome';
}

interface ContextType {
    transactions: Transaction[]
    fetchTransactions: (query?: string) => Promise<void>
    createTransaction: (data: TransactionInput) => Promise<void>
}

interface TransactionProviderProps {
    children: React.ReactNode
}

export const TransactionContext = createContext({} as ContextType)

export function TransactionProvider({ children }: TransactionProviderProps) {  
    
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function fetchTransactions(query?: string){

        const resp = await api.get('/transactions', {
            params: {
                _sort: 'createadAt',
                _order: 'desc',
                q: query
            }
        })
            setTransactions(resp.data)
    }

    async function createTransaction(data: TransactionInput) {
        const { description, price, category, type } = data
        
        const resp = await api.post('/transactions', {
            description,
            price,
            category,
            type,
            createadAt: new Date()            
        })
        setTransactions(state => [resp.data, ...state])
    }

    useEffect(() => {
        fetchTransactions()
    }, [])
    
    return (
        <TransactionContext.Provider value={{ 
                transactions,
                fetchTransactions,
                createTransaction         
            }}>
            {children}
        </TransactionContext.Provider>
    )
}




