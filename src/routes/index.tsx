import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ConfigForm } from '../components/ConfigForm'
import { Reglement } from '../components/Reglement'
import { ScrollArea } from '../components/ui/scroll-area'
import { Button } from '../components/ui/button'
import { defaultConfig, type ReglementConfig } from '../types/config'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const [config, setConfig] = useState<ReglementConfig>(defaultConfig)

  const handlePrint = () => {
    window.print()
  }

  const handleExport = () => {
    const json = JSON.stringify(config, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `reglement-${config.event.name || 'config'}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        const text = await file.text()
        try {
          const imported = JSON.parse(text)
          setConfig({ ...defaultConfig, ...imported })
        } catch {
          alert('Ongeldig JSON bestand')
        }
      }
    }
    input.click()
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-background px-4 py-3 flex items-center justify-between print:hidden">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">NRF Reglement Generator</h1>
          <Link
            to="/v2"
            className="text-sm text-muted-foreground hover:text-foreground underline"
          >
            Probeer de nieuwe wizard &rarr;
          </Link>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleImport}>
            Importeren
          </Button>
          <Button variant="outline" size="sm" onClick={handleExport}>
            Exporteren
          </Button>
          <Button size="sm" onClick={handlePrint}>
            Afdrukken
          </Button>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left pane - Config Form */}
        <div className="w-[400px] border-r bg-muted/30 print:hidden">
          <ScrollArea className="h-full">
            <ConfigForm config={config} onChange={setConfig} />
          </ScrollArea>
        </div>

        {/* Right pane - Document Preview */}
        <div className="flex-1 bg-gray-100 print:bg-white">
          <ScrollArea className="h-full print:h-auto">
            <div className="p-8 print:p-0">
              <Reglement config={config} />
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          body {
            background: white !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}
