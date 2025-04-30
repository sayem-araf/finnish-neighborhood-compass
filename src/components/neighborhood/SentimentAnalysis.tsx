
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SentimentAnalysis as SentimentAnalysisType } from "../../types/neighborhood";
import { Badge } from "../ui/badge";
import { Star, StarHalf, Smile, Frown, Meh } from "lucide-react";

interface SentimentAnalysisProps {
  sentimentData: SentimentAnalysisType;
}

const SentimentAnalysis: React.FC<SentimentAnalysisProps> = ({ sentimentData }) => {
  // Helper function to convert sentiment score (-1 to 1) to a percentage (0 to 100)
  const getProgressValue = (score: number) => {
    return (score + 1) * 50; // Convert from [-1, 1] to [0, 100]
  };

  // Helper function to get color based on sentiment score
  const getSentimentColor = (score: number) => {
    if (score >= 0.5) return "bg-green-500";
    if (score >= 0.2) return "bg-green-400";
    if (score >= 0) return "bg-blue-400";
    if (score >= -0.2) return "bg-amber-400";
    if (score >= -0.5) return "bg-orange-500";
    return "bg-red-500";
  };

  // Helper function to get emoji based on sentiment score
  const getSentimentIcon = (score: number) => {
    if (score >= 0.3) return <Smile className="h-5 w-5 text-green-500" />;
    if (score >= -0.3) return <Meh className="h-5 w-5 text-amber-500" />;
    return <Frown className="h-5 w-5 text-red-500" />;
  };

  // Helper function to get trend icon
  const getTrendIcon = () => {
    switch (sentimentData.recentTrend) {
      case "improving":
        return <span className="text-green-500">↑</span>;
      case "declining":
        return <span className="text-red-500">↓</span>;
      default:
        return <span className="text-blue-500">→</span>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Resident Sentiment Analysis</span>
          <div className="flex items-center gap-1 text-sm">
            <span>Trend: {sentimentData.recentTrend}</span>
            {getTrendIcon()}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Overall sentiment */}
          <div>
            <div className="flex justify-between mb-2 items-center">
              <div className="flex items-center gap-2">
                {getSentimentIcon(sentimentData.overall)}
                <span className="font-medium">Overall Sentiment</span>
              </div>
              <span className="text-sm">{sentimentData.overall.toFixed(2)}</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full">
              <div
                className={`h-2 rounded-full ${getSentimentColor(sentimentData.overall)}`}
                style={{ width: `${getProgressValue(sentimentData.overall)}%` }}
              ></div>
            </div>
          </div>

          {/* Aspect breakdown */}
          <div>
            <h3 className="text-sm font-medium mb-3">Sentiment by Aspect</h3>
            <div className="space-y-3">
              {Object.entries(sentimentData.aspects).map(([aspect, score]) => (
                <div key={aspect}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm capitalize">{aspect}</span>
                    <span className="text-sm">{score.toFixed(2)}</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <div
                      className={`h-2 rounded-full ${getSentimentColor(score)}`}
                      style={{ width: `${getProgressValue(score)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common phrases */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium mb-2 flex items-center gap-1">
                <Smile className="h-4 w-4 text-green-500" />
                <span>Commonly Mentioned Positives</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {sentimentData.commonPhrases.positive.map((phrase, i) => (
                  <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {phrase}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2 flex items-center gap-1">
                <Frown className="h-4 w-4 text-red-500" />
                <span>Commonly Mentioned Negatives</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {sentimentData.commonPhrases.negative.map((phrase, i) => (
                  <Badge key={i} variant="outline" className="bg-red-50 text-red-700 border-red-200">
                    {phrase}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SentimentAnalysis;
