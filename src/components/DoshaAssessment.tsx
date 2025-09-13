import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Leaf, Flame, Droplets } from "lucide-react";

interface DoshaScore {
  vata: number;
  pitta: number;
  kapha: number;
}

interface DoshaAssessmentProps {
  scores: DoshaScore;
  primaryDosha: string;
}

const doshaInfo = {
  vata: {
    icon: Leaf,
    color: "text-primary",
    bgColor: "bg-primary/10",
    description: "Air & Space - Movement, Creativity, Flexibility"
  },
  pitta: {
    icon: Flame,
    color: "text-secondary",
    bgColor: "bg-secondary/20",
    description: "Fire & Water - Transformation, Intelligence, Focus"
  },
  kapha: {
    icon: Droplets,
    color: "text-accent",
    bgColor: "bg-accent/20",
    description: "Earth & Water - Stability, Strength, Immunity"
  }
};

export function DoshaAssessment({ scores, primaryDosha }: DoshaAssessmentProps) {
  const maxScore = Math.max(scores.vata, scores.pitta, scores.kapha);
  
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="p-2 bg-gradient-primary rounded-lg">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </div>
          <span>Dosha Assessment</span>
          <Badge className="bg-gradient-secondary text-secondary-foreground ml-auto">
            Primary: {primaryDosha}
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {Object.entries(scores).map(([dosha, score]) => {
          const info = doshaInfo[dosha as keyof typeof doshaInfo];
          const IconComponent = info.icon;
          const percentage = (score / maxScore) * 100;
          
          return (
            <div key={dosha} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${info.bgColor}`}>
                    <IconComponent className={`h-4 w-4 ${info.color}`} />
                  </div>
                  <div>
                    <h4 className="font-medium capitalize">{dosha}</h4>
                    <p className="text-xs text-muted-foreground">{info.description}</p>
                  </div>
                </div>
                <span className="font-semibold">{score}%</span>
              </div>
              
              <Progress 
                value={percentage} 
                className="h-2"
              />
            </div>
          );
        })}
        
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-medium text-sm mb-2">Recommended Therapies</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs">Abhyanga Massage</Badge>
            <Badge variant="outline" className="text-xs">Shirodhara</Badge>
            <Badge variant="outline" className="text-xs">Panchakarma</Badge>
            <Badge variant="outline" className="text-xs">Herbal Steam</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}