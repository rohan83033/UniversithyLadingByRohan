import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            University Landing Pages
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Explore our premier universities with comprehensive course information and placement details
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Link to="/university-1">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <CardTitle>Premier Institute of Technology</CardTitle>
                <CardDescription>Elite Technical Education</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive B.Tech programs with 95% placement rates and industry partnerships
                </p>
                <Button variant="default" className="w-full">
                  Explore Now
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/university-2">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <CardTitle>Global Business University</CardTitle>
                <CardDescription>Business & Management Excellence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  MBA and BBA programs ranked among top institutions with international placements
                </p>
                <Button variant="default" className="w-full">
                  Explore Now
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  )
}
