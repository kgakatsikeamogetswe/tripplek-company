"use client"

import { useState } from "react"
import { Calendar, Clock, User, Check, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"


const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM",
]

export default function BookingSystem() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState("")
  const [appointments, setAppointments] = useState([])
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  })
  const [isBooked, setIsBooked] = useState(false)

  // Generate calendar days for current month
  const generateCalendarDays = () => {
    const today = new Date()
    const currentMonth = today.getMonth()
    const currentYear = today.getFullYear()
    const firstDay = new Date(currentYear, currentMonth, 1)
    const lastDay = new Date(currentYear, currentMonth + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Empty cells before the first day
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(currentYear, currentMonth, day))
    }

    return days
  }

  const isDateDisabled = (date) => {
    if (!date) return true
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  const isTimeSlotBooked = (date, time) => {
    if (!date) return false
    const dateString = date.toISOString().split("T")[0]
    return appointments.some((apt) => apt.date === dateString && apt.time === time)
  }

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !bookingForm.name || !bookingForm.email) {
      return
    }

    const newAppointment = {
      id: Date.now().toString(),
      date: selectedDate.toISOString().split("T")[0],
      time: selectedTime,
      ...bookingForm,
    }

    const existingAppointments = JSON.parse(localStorage.getItem("appointments") || "[]")
    const updatedAppointments = [...existingAppointments, newAppointment]
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments))

    setAppointments([...appointments, newAppointment])
    setIsBooked(true)

    // Reset after 3s
    setTimeout(() => {
      setIsBooked(false)
      setSelectedDate(null)
      setSelectedTime("")
      setBookingForm({ name: "", email: "", phone: "", notes: "" })
    }, 3000)
  }

  const calendarDays = generateCalendarDays()
  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
  ]
  const currentMonth = monthNames[new Date().getMonth()]
  const currentYear = new Date().getFullYear()

  if (isBooked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-4">
              Your appointment has been scheduled for {selectedDate?.toLocaleDateString()} at {selectedTime}
            </p>
            <p className="text-sm text-gray-500">You will receive a confirmation email shortly.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div>
    <Navigation/>
    <div className="min-h-screen bg-white p-25">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Book Your Appointment</h1>
              <p className="text-lg text-gray-600">Select a date and time that works best for you</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Select Date
              </CardTitle>
              <p className="text-sm text-gray-600">
                {currentMonth} {currentYear}
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((date, index) => (
                  <div key={index}>
                    {date ? (
                      <button
                        onClick={() => !isDateDisabled(date) && setSelectedDate(date)}
                        className={`calendar-day ${
                          selectedDate?.toDateString() === date.toDateString() ? "selected" : ""
                        } ${isDateDisabled(date) ? "disabled" : ""}`}
                        disabled={isDateDisabled(date)}
                      >
                        {date.getDate()}
                      </button>
                    ) : (
                      <div className="w-10 h-10" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Time Slots and Booking Form */}
          <div className="space-y-6">
            {/* Time Slots */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Available Times
                </CardTitle>
                <p className="text-sm text-gray-600">
                  {selectedDate ? selectedDate.toLocaleDateString() : "Please select a date first"}
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((time) => {
                    const isBookedSlot = isTimeSlotBooked(selectedDate, time)
                    const isDisabled = !selectedDate || isBookedSlot

                    return (
                      <button
                        key={time}
                        onClick={() => !isDisabled && setSelectedTime(time)}
                        className={`time-slot ${selectedTime === time ? "selected" : ""} ${
                          isBookedSlot ? "booked" : ""
                        }`}
                        disabled={isDisabled}
                      >
                        {time}
                        {isBookedSlot && <span className="block text-xs">Booked</span>}
                      </button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Booking Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      placeholder="(+27) 000-000-000"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={bookingForm.notes}
                    onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                    placeholder="Any special requests or information..."
                    rows={3}
                  />
                </div>
                <Button
                  onClick={handleBooking}
                  className="w-full"
                  disabled={!selectedDate || !selectedTime || !bookingForm.name || !bookingForm.email}
                >
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
