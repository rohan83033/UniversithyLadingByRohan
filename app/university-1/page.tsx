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

export default function University1Page() {
  const [data, setData] = useState<UniversityData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/universities/1');
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
        primaryColor="bg-primary"
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
              'NAAC Accredited Institution',
              'ISO 9001:2015 Certified',
              'Member of AICTE',
              'NBA Accredited Programs',
            ]}
            icon="🎓"
          />

          <UniversitySection
            title="Courses Offered"
            description="Comprehensive programs designed to meet industry standards"
            items={courseNames}
            icon="📚"
          />

          <UniversitySection
            title="Placements"
            description="Strong industry partnerships with major corporations"
            items={[
              'Top 50 IT Companies recruit',
              'Average Package: 8-12 LPA',
              'Internship opportunities from Year 1',
              '100% placement assistance',
            ]}
            icon="💼"
          />

          <UniversitySection
            title="Facilities"
            description="State-of-the-art infrastructure for holistic development"
            items={[
              'Modern Computer Labs with High-end Systems',
              'WiFi-enabled Campus Network',
              'Fully Equipped Library with Digital Resources',
              'Sports Complex and Fitness Center',
              'Hostel Facilities with 24/7 Security',
              'Multi-cuisine Cafeteria',
            ]}
            icon="🏢"
          />

          <UniversitySection
            title="Student Life"
            description="Vibrant campus culture with numerous activities"
            items={[
              'Technical Clubs and Societies',
              'Annual Techno-Cultural Fest',
              'Robotics and Innovation Lab',
              'Entrepreneurship Cell',
              'International Exchange Programs',
              'Community Service Initiatives',
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
  );
}
