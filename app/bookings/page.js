"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  ArrowRight,
  ArrowLeft,
  CalendarIcon,
  Clock,
  CheckCircle,
  User,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";


export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const totalSteps = 4;

  const handleServiceToggle = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    // 🔌 You’ll insert into Supabase here
    // Example:
    // await supabase.from("bookings").insert({
    //   services: selectedServices,
    //   date: selectedDate,
    //   time: selectedTime,
    //   urgent: isUrgent,
    //   ...contactInfo
    // })

    setShowConfirmation(true);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedServices.length > 0;
      case 2:
        return selectedDate && (selectedTime || isUrgent);
      case 3:
        return contactInfo.name && contactInfo.email && contactInfo.phone;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Booking Form */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Book Your Service
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Schedule Your Electrical & Networking Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get professional electrical and networking services with our easy
              4-step booking process.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                      step <= currentStep
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step < currentStep ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      step
                    )}
                  </div>
                  {step < 4 && (
                    <div
                      className={`h-1 w-20 mx-2 transition-all duration-300 ${
                        step < currentStep ? "bg-accent" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Select Services</span>
              <span>Choose Date & Time</span>
              <span>Contact Details</span>
              <span>Confirmation</span>
            </div>
          </div>

          {/* Step Content */}
          <Card className="min-h-[500px]">
            <CardContent className="p-8">
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <div className="animate-slide-in-left">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl text-primary">
                      Select Your Services
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Choose one or more services you need
                    </p>
                  </CardHeader>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* 🔌 Map real services from Supabase */}
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time Selection */}
              {currentStep === 2 && (
                <div className="animate-slide-in-left">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl text-primary">
                      Choose Date & Time
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Select your preferred appointment time
                    </p>
                  </CardHeader>

                  <div className="space-y-6">
                    {/* Emergency Toggle */}
                    <Card className="border-destructive/20">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            id="urgent"
                            checked={isUrgent}
                            onChange={(e) => setIsUrgent(e.target.checked)}
                            className="w-4 h-4 text-destructive"
                          />
                          <Label
                            htmlFor="urgent"
                            className="text-destructive font-medium"
                          >
                            Emergency Service (24/7 Available)
                          </Label>
                        </div>
                      </CardContent>
                    </Card>

                    {!isUrgent && (
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Date Selection */}
                        <div>
                          <Label className="text-base font-medium text-primary mb-4 block">
                            Select Date
                          </Label>
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) =>
                              date < new Date() || date.getDay() === 0
                            }
                            className="rounded-md border"
                          />
                        </div>

                        {/* Time Selection */}
                        <div>
                          <Label className="text-base font-medium text-primary mb-4 block">
                            Select Time
                          </Label>
                          <div className="grid grid-cols-2 gap-3">
                            {/* 🔌 Map available time slots from Supabase */}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Contact Information */}
              {currentStep === 3 && (
                <div className="animate-slide-in-left">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl text-primary">
                      Contact Information
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Tell us how to reach you
                    </p>
                  </CardHeader>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={contactInfo.name}
                          onChange={(e) =>
                            setContactInfo({
                              ...contactInfo,
                              name: e.target.value,
                            })
                          }
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={contactInfo.email}
                          onChange={(e) =>
                            setContactInfo({
                              ...contactInfo,
                              email: e.target.value,
                            })
                          }
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={contactInfo.phone}
                          onChange={(e) =>
                            setContactInfo({
                              ...contactInfo,
                              phone: e.target.value,
                            })
                          }
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address">Service Address</Label>
                        <Input
                          id="address"
                          value={contactInfo.address}
                          onChange={(e) =>
                            setContactInfo({
                              ...contactInfo,
                              address: e.target.value,
                            })
                          }
                          placeholder="Enter service location"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">Additional Details</Label>
                        <Textarea
                          id="message"
                          value={contactInfo.message}
                          onChange={(e) =>
                            setContactInfo({
                              ...contactInfo,
                              message: e.target.value,
                            })
                          }
                          placeholder="Describe your needs..."
                          rows={4}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Confirmation */}
              {currentStep === 4 && (
                <div className="animate-slide-in-left">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl text-primary">
                      Review Your Booking
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Please review your service request
                    </p>
                  </CardHeader>

                  <div className="space-y-6">
                    {/* Selected Services */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Selected Services
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {/* 🔌 Render selected services from Supabase */}
                      </CardContent>
                    </Card>

                    {/* Appointment Details */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Appointment Details
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3">
                            <CalendarIcon className="h-5 w-5 text-accent" />
                            <span>
                              {isUrgent
                                ? "Emergency Service - ASAP"
                                : selectedDate
                                ? format(selectedDate, "PPP")
                                : "No date selected"}
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Clock className="h-5 w-5 text-accent" />
                            <span>
                              {isUrgent
                                ? "24/7 Available"
                                : selectedTime || "No time selected"}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Contact Information */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Contact Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3">
                            <User className="h-5 w-5 text-accent" />
                            <span>{contactInfo.name}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Mail className="h-5 w-5 text-accent" />
                            <span>{contactInfo.email}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Phone className="h-5 w-5 text-accent" />
                            <span>{contactInfo.phone}</span>
                          </div>
                          {contactInfo.address && (
                            <div className="flex items-center space-x-3">
                              <MapPin className="h-5 w-5 text-accent" />
                              <span>{contactInfo.address}</span>
                            </div>
                          )}
                        </div>
                        {contactInfo.message && (
                          <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                            <p className="text-sm">{contactInfo.message}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex items-center space-x-2 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </Button>

            {currentStep < totalSteps ? (
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="bg-accent hover:bg-accent/90 text-accent-foreground flex items-center space-x-2"
              >
                <span>Next</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="bg-accent hover:bg-accent/90 text-accent-foreground flex items-center space-x-2"
              >
                <span>Submit Booking</span>
                <CheckCircle className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
            <DialogTitle className="text-center text-2xl">
              Booking Confirmed!
            </DialogTitle>
            <DialogDescription className="text-center">
              Thank you for choosing our services. We'll contact you shortly to
              confirm your appointment details.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-6">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <p className="font-medium text-primary">Booking Reference</p>
              <p className="text-2xl font-bold text-accent">
                TK-{Math.random().toString(36).substr(2, 6).toUpperCase()}
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <Button
                onClick={() => setShowConfirmation(false)}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Close
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <Footer />
    </div>
  );
}
