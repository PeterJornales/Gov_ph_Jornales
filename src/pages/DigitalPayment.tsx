import PageTemplate from "@/components/PageTemplate";
import { Card } from "@/components/ui/card";
import { CreditCard, Smartphone, Building2, QrCode } from "lucide-react";

const DigitalPayment = () => {
  return (
    <PageTemplate
      title="Digital Payment Services"
      subtitle="Learn about the various digital payment options available for government services"
    >
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <CreditCard className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-medium">Online Banking</h3>
            </div>
            <p className="text-gray-600">
              Pay government fees and services through your bank's online platform.
              Supported by major Philippine banks.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Smartphone className="h-8 w-8 text-green-600" />
              <h3 className="text-xl font-medium">Mobile Wallets</h3>
            </div>
            <p className="text-gray-600">
              Use popular e-wallets like GCash, Maya, and others for quick and easy payments.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Building2 className="h-8 w-8 text-purple-600" />
              <h3 className="text-xl font-medium">Over-the-Counter</h3>
            </div>
            <p className="text-gray-600">
              Pay at authorized payment centers and partner establishments nationwide.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <QrCode className="h-8 w-8 text-red-600" />
              <h3 className="text-xl font-medium">QR Payments</h3>
            </div>
            <p className="text-gray-600">
              Scan QR codes for quick and contactless payment transactions.
            </p>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-serif text-primary mb-4">Payment Guidelines</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Important information about making digital payments for government services:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Keep your transaction reference numbers</li>
              <li>Verify payment confirmation messages</li>
              <li>Check official payment channels only</li>
              <li>Report suspicious transactions immediately</li>
            </ul>
          </div>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default DigitalPayment;