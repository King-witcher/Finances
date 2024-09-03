import { HomeTemplate } from '@/components/templates'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-guarded/')({
  component: HomeTemplate,
})
