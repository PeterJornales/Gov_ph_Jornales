import PageTemplate from "@/components/PageTemplate";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const SocialMedia = () => {
  return (
    <PageTemplate
      title="Social Media"
      subtitle="Connect with us on our social media platforms"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <Facebook className="h-8 w-8 text-blue-600" />
            <h3 className="text-xl font-medium">Facebook</h3>
          </div>
          <p className="text-gray-600 mb-4">Follow us on Facebook for the latest updates and announcements.</p>
          <Button className="w-full">Visit Facebook Page</Button>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <Twitter className="h-8 w-8 text-blue-400" />
            <h3 className="text-xl font-medium">Twitter</h3>
          </div>
          <p className="text-gray-600 mb-4">Get real-time updates and news on our Twitter account.</p>
          <Button className="w-full">Visit Twitter Profile</Button>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <Instagram className="h-8 w-8 text-pink-600" />
            <h3 className="text-xl font-medium">Instagram</h3>
          </div>
          <p className="text-gray-600 mb-4">See visual updates and stories on our Instagram page.</p>
          <Button className="w-full">Visit Instagram Profile</Button>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <Youtube className="h-8 w-8 text-red-600" />
            <h3 className="text-xl font-medium">YouTube</h3>
          </div>
          <p className="text-gray-600 mb-4">Watch our videos and live streams on YouTube.</p>
          <Button className="w-full">Visit YouTube Channel</Button>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default SocialMedia;