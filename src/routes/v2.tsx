import { createFileRoute } from '@tanstack/react-router'
import { WizardConfigurator } from '../components/wizard'

export const Route = createFileRoute('/v2')({
  component: WizardPage,
})

function WizardPage() {
  return <WizardConfigurator />
}
