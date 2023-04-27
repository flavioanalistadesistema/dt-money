import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00B37E"/>
                </header>
                <strong>R$ 17.400,00</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleUp size={32} color="#F75A68"/>
                </header>
                <strong>R$ 17.400,00</strong>
            </SummaryCard>
            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#ffffff"/>
                </header>
                <strong>R$ 17.400,00</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}