
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ExternalLink } from "lucide-react";

interface MapApiKeyInputProps {
  tokenInput: string;
  onTokenInputChange: (value: string) => void;
  onTokenUpdate: () => void;
  showError: boolean;
}

const MapApiKeyInput = ({ 
  tokenInput, 
  onTokenInputChange, 
  onTokenUpdate, 
  showError 
}: MapApiKeyInputProps) => {
  return (
    <div className="mb-4 space-y-2">
      {showError && (
        <Alert className="mb-4 bg-amber-50 border-amber-200">
          <AlertDescription>
            The map failed to load due to an API key restriction. Google restricts API keys to specific domains.
            Please enter your own unrestricted Google Maps API key below.
          </AlertDescription>
        </Alert>
      )}
      <p className="text-sm text-muted-foreground">
        Please enter your Google Maps API key to display the map. You can get one at{" "}
        <a 
          href="https://console.cloud.google.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline inline-flex items-center"
        >
          Google Cloud Console
          <ExternalLink className="h-3 w-3 ml-1" />
        </a>
      </p>
      <div className="flex gap-2">
        <Input
          placeholder="Enter your Google Maps API key"
          value={tokenInput}
          onChange={(e) => onTokenInputChange(e.target.value)}
        />
        <Button onClick={onTokenUpdate}>Update</Button>
      </div>
    </div>
  );
};

export default MapApiKeyInput;
