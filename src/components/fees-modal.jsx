import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { LeadForm } from './lead-form'

export function FeesModal({ isOpen, onClose, courses, universityName }) {
  const [showForm, setShowForm] = useState(false)

  if (!isOpen) return null

  const courseNames = courses.map(c => c.name)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-card text-card-foreground rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-primary text-primary-foreground p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{universityName} - Course Fees</h2>
          <button
            onClick={onClose}
            className="text-xl hover:opacity-80 transition-opacity"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          {!showForm ? (
            <>
              <div className="space-y-4 mb-6">
                {courses.map((course, idx) => (
                  <div
                    key={idx}
                    className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold text-foreground mb-2">{course.name}</h3>
                    <p className="text-muted-foreground">
                      Annual Fee Range: ₹{course.min.toLocaleString()} - ₹{course.max.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => setShowForm(true)}
                className="w-full mb-3"
              >
                Get More Information
              </Button>

              <Button
                onClick={onClose}
                variant="outline"
                className="w-full"
              >
                Close
              </Button>
            </>
          ) : (
            <>
              <h3 className="text-xl font-semibold mb-4">Apply Now</h3>
              <LeadForm courses={courseNames} onClose={onClose} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
