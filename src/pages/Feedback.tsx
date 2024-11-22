import PageTemplate from "@/components/PageTemplate";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Feedback = () => {
  return (
    <PageTemplate
      title="Feedback"
      subtitle="Help us improve our services by providing your feedback"
    >
      <Card className="max-w-2xl mx-auto p-6">
        <form className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">How satisfied are you with our service?</h3>
            <RadioGroup defaultValue="satisfied">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="very-satisfied" id="very-satisfied" />
                <Label htmlFor="very-satisfied">Very Satisfied</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="satisfied" id="satisfied" />
                <Label htmlFor="satisfied">Satisfied</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="neutral" id="neutral" />
                <Label htmlFor="neutral">Neutral</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dissatisfied" id="dissatisfied" />
                <Label htmlFor="dissatisfied">Dissatisfied</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
              Your Feedback
            </label>
            <Textarea 
              id="feedback" 
              placeholder="Please share your thoughts and suggestions" 
              className="min-h-[150px]" 
            />
          </div>
          
          <Button className="w-full">Submit Feedback</Button>
        </form>
      </Card>
    </PageTemplate>
  );
};

export default Feedback;