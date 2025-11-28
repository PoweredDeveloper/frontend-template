import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/table')({
  component: About,
})

function About() {
  return <div className="p-2">Hello from Table!</div>
}
