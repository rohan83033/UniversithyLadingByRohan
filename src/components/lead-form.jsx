import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'

export function LeadForm({ courses, onClose }) {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    course: '',
    intakeYear: new Date().getFullYear().toString(),
    consent: false,
  })

  const { toast } = useToast()

  const handleChange = (e) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? e.target.checked : value,
    }))
  }

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/
    return phoneRegex.test(phone)
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.fullName.trim()) {
      toast({ title: 'Error', description: 'Please enter your full name', variant: 'destructive' })
      return
    }

    if (!validateEmail(formData.email)) {
      toast({ title: 'Error', description: 'Please enter a valid email', variant: 'destructive' })
      return
    }

    if (!validatePhone(formData.phone)) {
      toast({ title: 'Error', description: 'Please enter a valid 10-digit phone number', variant: 'destructive' })
      return
    }

    if (!formData.state.trim()) {
      toast({ title: 'Error', description: 'Please select a state', variant: 'destructive' })
      return
    }

    if (!formData.course) {
      toast({ title: 'Error', description: 'Please select a course', variant: 'destructive' })
      return
    }

    if (!formData.consent) {
      toast({ title: 'Error', description: 'Please accept the consent checkbox', variant: 'destructive' })
      return
    }

    setLoading(true)

    try {
      const webhookUrl = import.meta.env.VITE_PIPEDREAM_URL

      if (!webhookUrl) {
        console.log('[v0] Form submission (mock):', formData)
        toast({
          title: 'Success',
          description: 'Your application has been submitted successfully!',
          variant: 'default'
        })
      } else {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            state: formData.state,
            course: formData.course,
            intakeYear: formData.intakeYear,
            timestamp: new Date().toISOString(),
          }),
        })

        if (!response.ok) {
          throw new Error('Failed to submit form')
        }

        toast({
          title: 'Success',
          description: 'Your application has been submitted successfully!',
          variant: 'default'
        })
      }

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        state: '',
        course: '',
        intakeYear: new Date().getFullYear().toString(),
        consent: false,
      })

      if (onClose) {
        setTimeout(onClose, 1500)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast({
        title: 'Error',
        description: 'Failed to submit form. Please try again.',
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="fullName" className="text-sm font-medium">
          Full Name *
        </Label>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Your full name"
          value={formData.fullName}
          onChange={handleChange}
          className="mt-1"
          required
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-sm font-medium">
          Email Address *
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          className="mt-1"
          required
        />
      </div>

      <div>
        <Label htmlFor="phone" className="text-sm font-medium">
          Phone Number (10-digit) *
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="9876543210"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1"
          maxLength={10}
          required
        />
      </div>

      <div>
        <Label htmlFor="state" className="text-sm font-medium">
          State *
        </Label>
        <select
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground"
          required
        >
          <option value="">Select a state</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
        </select>
      </div>

      <div>
        <Label htmlFor="course" className="text-sm font-medium">
          Course Interested *
        </Label>
        <select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground"
          required
        >
          <option value="">Select a course</option>
          {courses.map(course => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Label htmlFor="intakeYear" className="text-sm font-medium">
          Intake Year
        </Label>
        <select
          id="intakeYear"
          name="intakeYear"
          value={formData.intakeYear}
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground"
        >
          <option value={new Date().getFullYear()}>{new Date().getFullYear()}</option>
          <option value={new Date().getFullYear() + 1}>{new Date().getFullYear() + 1}</option>
          <option value={new Date().getFullYear() + 2}>{new Date().getFullYear() + 2}</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="rounded"
          required
        />
        <Label htmlFor="consent" className="text-sm cursor-pointer mb-0">
          I consent to receive information and promotional updates
        </Label>
      </div>

      <Button 
        type="submit" 
        disabled={loading}
        className="w-full"
      >
        {loading ? 'Submitting...' : 'Submit Application'}
      </Button>
    </form>
  )
}
