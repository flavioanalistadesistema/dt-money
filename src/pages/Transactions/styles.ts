import styled from "styled-components";

export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 70rem;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
`

export const TransactionTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    td {
        padding: 1.25rem 2rem;
        background: ${props => props.theme["gray-700"]};

        &:first-child {
            border-top-left-radius: .375rem;
            border-bottom-left-radius: .375rem;
        }

        &:last-child {
            border-top-right-radius: .375rem;
            border-bottom-right-radius: .375rem;
        }
    }
`

interface PriceRighlightProps {
    variant?: 'income'| 'outcome'
}

export const PriceRighlight = styled.span<PriceRighlightProps>`
    color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]}
`
