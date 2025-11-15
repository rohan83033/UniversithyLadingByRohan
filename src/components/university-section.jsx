export function UniversitySection({ title, description, items, icon }) {
  return (
    <section className="py-12 md:py-16 border-b border-border last:border-0">
      <div className="flex items-start gap-4 mb-4">
        {icon && <div className="text-2xl flex-shrink-0">{icon}</div>}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
      
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 bg-secondary/30 p-4 rounded-lg">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <span className="text-foreground">{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
