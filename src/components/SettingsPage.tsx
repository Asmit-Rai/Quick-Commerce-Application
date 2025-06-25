import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const SettingsPage: React.FC = () => {
  return (
    <div className="space-y-6 bg-[#FFF0ED] p-6 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-[#301814]">Settings</h1>
        <p className="text-[#301814]/70 mt-2">Manage basic settings</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* General Settings */}
        <Card className="bg-[#FEF3F0] rounded-[25px] shadow-lg">
          <CardHeader>
            <CardTitle className="text-[#301814]">General Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="appName">Application Name</Label>
              <Input id="appName" defaultValue="QuickCommerce" />
            </div>

            <Button className="bg-[#F35E44] text-white rounded-full hover:bg-[#D94C32]">
              Save Settings
            </Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="bg-[#FEF3F0] rounded-[25px] shadow-lg">
          <CardHeader>
            <CardTitle className="text-[#301814]">Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Enable Notifications</Label>
              <Switch defaultChecked />
            </div>

            <Button className="bg-[#F35E44] text-white rounded-full hover:bg-[#D94C32]">
              Save Notifications
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;