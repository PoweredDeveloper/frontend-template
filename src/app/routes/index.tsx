import Button from '@/components/ui/Button/Button'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <ThemeToggle />
      <div className="grid grid-cols-5 items-center justify-center gap-2 p-2">
        Primary
        <Button variant="primary" size="sm">
          Button
        </Button>
        <Button variant="primary" size="md">
          Button
        </Button>
        <Button variant="primary" size="lg" color="success">
          Button
        </Button>
        <Button variant="primary" size="xl">
          Button
        </Button>
        Outline
        <Button variant="outline" size="sm" color="warning">
          Button
        </Button>
        <Button variant="outline" size="md">
          Button
        </Button>
        <Button variant="outline" size="lg">
          Button
        </Button>
        <Button variant="outline" size="xl">
          Button
        </Button>
        Ghost
        <Button variant="ghost" size="sm">
          Button
        </Button>
        <Button variant="ghost" size="md">
          Button
        </Button>
        <Button variant="ghost" size="lg" color="error">
          Button
        </Button>
        <Button variant="ghost" size="xl">
          Button
        </Button>
        Disabled
        <Button variant="ghost" size="sm" disabled>
          Button
        </Button>
        <Button variant="ghost" size="md" disabled>
          Button
        </Button>
        <Button variant="ghost" size="lg" disabled>
          Button
        </Button>
        <Button variant="ghost" size="xl" disabled>
          Button
        </Button>
      </div>
    </div>
  )
}
