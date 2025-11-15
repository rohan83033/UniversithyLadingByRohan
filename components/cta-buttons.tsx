'use client';

import { Button } from '@/components/ui/button';
import { FeesModal } from './fees-modal';
import { LeadForm } from './lead-form';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Course {
  name: string;
  min: number;
  max: number;
}

interface CTAButtonsProps {
  courses: Course[];
  courseNames: string[];
  universityName: string;
}

export function CTAButtons({ courses, courseNames, universityName }: CTAButtonsProps) {
  const [feesModalOpen, setFeesModalOpen] = useState(false);

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

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" className="flex-1">
              Download Brochure
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Download Brochure</DialogTitle>
              <DialogDescription>
                Brochure download link would be provided here
              </DialogDescription>
            </DialogHeader>
            <p className="text-sm text-muted-foreground">
              A PDF brochure with detailed information about {universityName} programs, facilities, and admission process.
            </p>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex-1">
              Apply Now
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Apply Now</DialogTitle>
              <DialogDescription>
                Fill in your details to apply to {universityName}
              </DialogDescription>
            </DialogHeader>
            <LeadForm courses={courseNames} />
          </DialogContent>
        </Dialog>
      </div>

      <FeesModal
        isOpen={feesModalOpen}
        onClose={() => setFeesModalOpen(false)}
        courses={courses}
        universityName={universityName}
      />
    </>
  );
}
