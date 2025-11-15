'use client';

import { useState, useEffect } from 'react';
import { UniversityHero } from '@/components/university-hero';
import { UniversitySection } from '@/components/university-section';
import { CTAButtons } from '@/components/cta-buttons';

interface Course {
  name: string;
  min: number;
  max: number;
}

interface UniversityData {
  name: string;
  tagline: string;
  placementRate: string;
  avgPackage: string;
  courses: Course[];
  overview: string;
}

export default function University2Page() {
  const [data, setData] = useState<UniversityData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/universities/2');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Failed to fetch university data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!data) {
    return <div className="min-h-screen flex items-center justify-center">Failed to load university data</div>;
  }

  const courseNames = data.courses.map(c => c.name);

  return (
    <main>
      <UniversityHero
        university={data}
        primaryColor="bg-accent"
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
              'Top 50 Business Schools in India',
              'Global Network of Partner Institutions',
              'Industry-Focused Curriculum',
            ]}
            icon="🏆"
          />

          <UniversitySection
            title="Programs"
            description="Industry-relevant business programs"
            items={courseNames}
            icon="📊"
          />

          <UniversitySection
            title="Career Outcomes"
            description="Excellent placement record with leading organizations"
            items={[
              'Average CTC: 15-20 LPA',
              'Placements in MNCs and Startups',
              'Networking with 500+ Companies',
              'Executive Placement Support',
            ]}
            icon="🚀"
          />

          <UniversitySection
            title="Academic Excellence"
            description="World-class faculty and research initiatives"
            items={[
              'PhD Faculty from Top International Universities',
              'Research Publications in Tier-1 Journals',
              'Case Study Based Learning',
              'International Academic Collaborations',
              'Regular Industry Expert Lectures',
              'Business Simulation Labs',
            ]}
            icon="🔬"
          />

          <UniversitySection
            title="Campus & Amenities"
            description="Premium facilities for comprehensive student development"
            items={[
              'Modern Classrooms with AV Systems',
              'State-of-the-art Library',
              'Executive Lounge for MBA Students',
              'Networking Events and Seminars',
              'On-campus Accommodation',
              'Health and Wellness Center',
            ]}
            icon="🌟"
          />
        </div>

        <div className="mt-12 bg-accent/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Start Your Business Journey</h3>
          <p className="text-muted-foreground mb-6">
            Join our community of business leaders and entrepreneurs. Connect with us today!
          </p>
        </div>
      </div>
    </main>
  );
}
