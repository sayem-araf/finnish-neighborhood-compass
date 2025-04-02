
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export type OptionType = {
  value: string;
  label: string;
};

type PreferenceQuestionProps = {
  question: string;
  options: OptionType[];
  value: string;
  onChange: (value: string) => void;
  description?: string;
};

const PreferenceQuestion: React.FC<PreferenceQuestionProps> = ({
  question,
  options,
  value,
  onChange,
  description,
}) => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">{question}</CardTitle>
        {description && <p className="text-muted-foreground">{description}</p>}
      </CardHeader>
      <CardContent>
        <RadioGroup value={value} onValueChange={onChange} className="space-y-4">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center space-x-3 p-3 rounded-md border border-input hover:bg-muted/50 cursor-pointer transition-colors"
              onClick={() => onChange(option.value)}
            >
              <RadioGroupItem value={option.value} id={option.value} />
              <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default PreferenceQuestion;
