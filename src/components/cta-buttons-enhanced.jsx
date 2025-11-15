import { useState } from 'react'
import { Button } from './ui/button'
import { FeesModal } from './fees-modal'
import { LeadForm } from './lead-form'

export function CTAButtons({ courses, courseNames, universityName }) {
  const [feesModalOpen, setFeesModalOpen] = useState(false)
  const [applyDialogOpen, setApplyDialogOpen] = useState(false)
  const [brochureDialogOpen, setBrochureDialogOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Button
          onClick={() => setFeesModalOpen(true)}
          variant="outline"
          className="flex-1"
        >
          Check Course-wise Fees
        </Button>

        <Button
          onClick={() => setBrochureDialogOpen(true)}
          variant="secondary"
          className="flex-1"
        >
          Download Brochure
        </Button>

        <Button
          onClick={() => setApplyDialogOpen(true)}
          className="flex-1"
        >
          Apply Now
        </Button>
      </div>

      <FeesModal
        isOpen={feesModalOpen}
        onClose={() => setFeesModalOpen(false)}
        courses={courses}
        universityName={universityName}
      />

      {applyDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-card text-card-foreground rounded-lg shadow-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Apply Now</h2>
              <button
                onClick={() => setApplyDialogOpen(false)}
                className="text-2xl hover:opacity-70"
              >
                ✕
              </button>
            </div>
            <p className="text-muted-foreground mb-6">
              Fill in your details to apply to {universityName}
            </p>
            <LeadForm courses={courseNames} onClose={() => setApplyDialogOpen(false)} />
          </div>
        </div>
      )}

      {brochureDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-card text-card-foreground rounded-lg shadow-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Download Brochure</h2>
              <button
                onClick={() => setBrochureDialogOpen(false)}
                className="text-2xl hover:opacity-70"
              >
                ✕
              </button>
            </div>
            <p className="text-muted-foreground mb-4">
              Brochure download link would be provided here
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              A PDF brochure with detailed information about {universityName} programs, facilities, and admission process.
            </p>
            <Button onClick={() => setBrochureDialogOpen(false)} className="w-full">
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
