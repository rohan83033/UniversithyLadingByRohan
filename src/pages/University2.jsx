import { useState, useEffect } from 'react'
import { UniversityHero } from '@/components/university-hero'
import { UniversitySection } from '@/components/university-section'
import { CTAButtons } from '@/components/cta-buttons'
import { getUniversityData } from '@/services/universityService'

export default function University2Page() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const json = await getUniversityData(2)
        setData(json)
      } catch (error) {
        console.error('Failed to fetch university data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!data) {
    return <div className="min-h-screen flex items-center justify-center">Failed to load university data</div>
  }

  const courseNames = data.courses.map(c => c.name)

  return (
    <main>
      <UniversityHero
        university={data}
        primaryColor="bg-green-600"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <CTAButtons
          courses={data.courses}
          courseNames={courseNames}
          universityName={data.name}
        />

        <div className="space-y-8">
          <UniversitySection
            title="Overview"
            description={data.overview}
            items={[
              'AACSB Accredited Business School',
              'Triple Accredited Programs',
              'Industry-Aligned Curriculum',
              'Global Recognition',
            ]}
            icon="🎓"
          />

          <UniversitySection
            title="Courses Offered"
            description="World-class management and business programs"
            items={courseNames}
            icon="📚"
          />

          <UniversitySection
            title="Placements"
            description="Top recruiters from Fortune 500 companies"
            items={[
              'Goldman Sachs, McKinsey, Amazon recruit',
              'Average Package: 15-20 LPA',
              'Guaranteed internships',
              'International placement opportunities',
            ]}
            icon="💼"
          />

          <UniversitySection
            title="Facilities"
            description="Premium infrastructure for executive education"
            items={[
              'State-of-the-art Business School',
              'High-speed Internet and Cloud Labs',
              'Comprehensive Digital Library',
              'Executive Sports Academy',
              'Premium Residential Facilities',
              'Multi-cuisine International Cafeteria',
            ]}
            icon="🏢"
          />

          <UniversitySection
            title="Student Life"
            description="Dynamic campus with global perspective"
            items={[
              'Management Consulting Club',
              'Annual Business Summit',
              'Innovation and Startup Incubator',
              'Entrepreneurship Bootcamp',
              'Semester Abroad Programs',
              'Corporate Social Responsibility',
            ]}
            icon="🎉"
          />
        </div>

        <div className="mt-12 bg-secondary/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Join Us?</h3>
          <p className="text-muted-foreground mb-6">
            Take the first step towards your dream career. Fill the form below and our admissions team will be in touch!
          </p>
        </div>
      </div>
    </main>
  )
}
