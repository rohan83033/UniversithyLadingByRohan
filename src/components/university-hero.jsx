export function UniversityHero({ university, primaryColor }) {
  return (
    <section className={`${primaryColor} text-white py-16 md:py-24`}>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
          {university.name}
        </h1>
        <p className="text-xl md:text-2xl opacity-90 mb-8 text-balance">
          {university.tagline}
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="text-4xl font-bold mb-2">{university.placementRate}</div>
            <p className="text-white/80">Placement Rate</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">{university.avgPackage}</div>
            <p className="text-white/80">Average Package</p>
          </div>
        </div>
      </div>
    </section>
  )
}
