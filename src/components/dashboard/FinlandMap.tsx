
import { useState } from "react";
import { LoadScript } from "@react-google-maps/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import MapApiKeyInput from "./map/MapApiKeyInput";
import MapContent from "./map/MapContent";
import { defaultGoogleMapsApiKey } from "./map/constants";

const FinlandMap = () => {
  const [apiKey, setApiKey] = useState<string>(defaultGoogleMapsApiKey);
  const [tokenInput, setTokenInput] = useState<string>("");
  const [showTokenInput, setShowTokenInput] = useState<boolean>(true);
  const [mapError, setMapError] = useState<boolean>(false);
  const { toast } = useToast();

  const handleTokenUpdate = () => {
    if (tokenInput) {
      setApiKey(tokenInput);
      setShowTokenInput(false);
      setMapError(false);
      toast({
        title: "API Key updated",
        description: "Map will reload with your Google Maps API key.",
      });
    } else {
      toast({
        title: "API Key required",
        description: "Please enter a valid Google Maps API key.",
        variant: "destructive",
      });
    }
  };

  const handleMapError = () => {
    console.log("Map failed to load - API key may be restricted");
    setMapError(true);
    setShowTokenInput(true);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Neighborhood Locations</CardTitle>
      </CardHeader>
      <CardContent>
        {showTokenInput ? (
          <MapApiKeyInput
            tokenInput={tokenInput}
            onTokenInputChange={(value) => setTokenInput(value)}
            onTokenUpdate={handleTokenUpdate}
            showError={mapError}
          />
        ) : (
          <button 
            className="text-xs text-muted-foreground mb-2 hover:underline"
            onClick={() => setShowTokenInput(true)}
          >
            Change Google Maps API Key
          </button>
        )}
        <div className="w-full h-[300px] rounded-md overflow-hidden">
          <LoadScript 
            googleMapsApiKey={apiKey}
            onError={handleMapError}
            loadingElement={
              <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                Loading map...
              </div>
            }
          >
            <MapContent />
          </LoadScript>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinlandMap;
