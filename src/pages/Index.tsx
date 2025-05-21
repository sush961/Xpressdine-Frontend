
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <header className="bg-[#111827] text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">XpressDine</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="hover:text-[#3B82F6] transition-colors">Dashboard</a>
            <a href="#" className="hover:text-[#3B82F6] transition-colors">Reservations</a>
            <a href="#" className="hover:text-[#3B82F6] transition-colors">Tables</a>
            <a href="#" className="hover:text-[#3B82F6] transition-colors">Settings</a>
          </nav>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#111827]">
            Login
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#111827] mb-6">Restaurant Management System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Overview Card */}
            <Card>
              <CardHeader>
                <CardTitle>Table Status</CardTitle>
                <CardDescription>Current restaurant capacity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Available</span>
                    <Badge className="bg-[#D1FAE5] text-[#065F46] hover:bg-[#A7F3D0]">8 Tables</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Reserved</span>
                    <Badge className="bg-[#FEF3C7] text-[#92400E] hover:bg-[#FDE68A]">3 Tables</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Occupied</span>
                    <Badge className="bg-[#FEE2E2] text-[#991B1B] hover:bg-[#FECACA]">5 Tables</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8]">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Reservations Card */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Reservations</CardTitle>
                <CardDescription>Upcoming bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border rounded-md">
                    <p className="font-medium">James Wilson</p>
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>7:00 PM</span>
                      <span>4 Guests</span>
                    </div>
                  </div>
                  <div className="p-3 border rounded-md">
                    <p className="font-medium">Sarah Johnson</p>
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>8:30 PM</span>
                      <span>2 Guests</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF]">
                  Manage Reservations
                </Button>
              </CardFooter>
            </Card>

            {/* Quick Actions Card */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8]">
                  New Reservation
                </Button>
                <Button className="w-full bg-[#10B981] hover:bg-[#059669]">
                  Assign Table
                </Button>
                <Button variant="outline" className="w-full border-[#6B7280] text-[#6B7280]">
                  View Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-6 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">XpressDine</h3>
              <p className="text-sm text-gray-400">Restaurant Management System</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm hover:text-[#3B82F6]">Terms of Service</a>
              <a href="#" className="text-sm hover:text-[#3B82F6]">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-[#3B82F6]">Contact Us</a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} XpressDine. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
