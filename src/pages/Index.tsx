
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FFF5F0]">
      {/* Header */}
      <header className="bg-[#FFF5F0] py-4 px-6 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M12 6L7 12H17L12 6Z" fill="#FF5631" />
              <path d="M17 12L12 18L7 12H17Z" fill="#FF5631" />
            </svg>
            <h1 className="text-2xl font-bold text-[#FF5631]">XpressDine</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="hover:text-[#FF5631] transition-colors">Features</a>
            <a href="#" className="hover:text-[#FF5631] transition-colors">AI Concierge</a>
            <a href="#" className="hover:text-[#FF5631] transition-colors">Contact</a>
          </nav>
          <Button className="bg-[#FF5631] hover:bg-[#E64A2A] text-white">
            Get Started
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <section className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#111827] mb-6">AI Concierge for 24/7 Reservations</h2>
          <p className="text-lg mb-8 text-gray-600">
            Never miss a booking with XpressDine's multilingual AI Concierge and WhatsApp bot - designed specifically for Southeast Asian restaurants.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button className="bg-[#FF5631] hover:bg-[#E64A2A] text-white">
              Request Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-[#FF5631] text-[#FF5631] hover:bg-[#FFF0EB]">
              Learn More
            </Button>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-3xl font-bold text-[#111827] mb-6 text-center">XpressDine Reservation System</h3>
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
                <Button className="w-full bg-[#FF5631] hover:bg-[#E64A2A]">
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
                <Button variant="outline" className="w-full border-[#FF5631] text-[#FF5631] hover:bg-[#FFF0EB]">
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
                <Button className="w-full bg-[#FF5631] hover:bg-[#E64A2A]">
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
      <footer className="bg-[#FFF5F0] text-gray-700 py-6 px-4 border-t border-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M12 6L7 12H17L12 6Z" fill="#FF5631" />
                  <path d="M17 12L12 18L7 12H17Z" fill="#FF5631" />
                </svg>
                <h3 className="text-xl font-bold text-[#FF5631]">XpressDine</h3>
              </div>
              <p className="text-sm text-gray-500">XpressDine Reservation System</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm hover:text-[#FF5631]">Terms of Service</a>
              <a href="#" className="text-sm hover:text-[#FF5631]">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-[#FF5631]">Contact Us</a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} XpressDine. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
