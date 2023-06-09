import { useSummary } from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/Formatter'
import { SummaryCard, SummaryContainer } from './styles'
import { ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleUp size={32} color="#F75A68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#ffffff" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
