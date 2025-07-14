interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  benefits: Benefit[];
}

export const BenefitsSection = ({ benefits }: BenefitsSectionProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
        Why You'll Love This
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="text-2xl">{benefit.icon}</div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};