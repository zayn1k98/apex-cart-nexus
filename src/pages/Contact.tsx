import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageCircle,
    Headphones,
    HelpCircle,
    Star
} from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSelectChange = (value: string) => {
        setFormData(prev => ({
            ...prev,
            category: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({
            name: "",
            email: "",
            subject: "",
            category: "",
            message: ""
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email Us",
            description: "Get in touch via email",
            details: "support@racesim.com",
            action: "Send Email"
        },
        {
            icon: Phone,
            title: "Call Us",
            description: "Speak with our experts",
            details: "+1 (555) 123-4567",
            action: "Call Now"
        },
        {
            icon: MapPin,
            title: "Visit Us",
            description: "Come see our showroom",
            details: "123 Racing Street, Speed City, SC 12345",
            action: "Get Directions"
        },
        {
            icon: Clock,
            title: "Business Hours",
            description: "When we're available",
            details: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
            action: "View Hours"
        }
    ];

    const supportCategories = [
        { value: "general", label: "General Inquiry" },
        { value: "technical", label: "Technical Support" },
        { value: "sales", label: "Sales Question" },
        { value: "warranty", label: "Warranty Claim" },
        { value: "shipping", label: "Shipping & Delivery" },
        { value: "returns", label: "Returns & Exchanges" },
        { value: "partnership", label: "Partnership Inquiry" },
        { value: "other", label: "Other" }
    ];

    const faqs = [
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for all products. Items must be in original condition with all packaging and accessories included."
        },
        {
            question: "How long does shipping take?",
            answer: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business days. International shipping varies by location."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship to over 45 countries worldwide. Shipping costs and delivery times vary by location."
        },
        {
            question: "What warranty do you provide?",
            answer: "All our products come with a 2-year manufacturer warranty covering defects in materials and workmanship."
        },
        {
            question: "Can I get technical support?",
            answer: "Yes, our technical support team is available Monday-Friday 9AM-6PM EST. You can reach us via email, phone, or live chat."
        },
        {
            question: "Do you offer custom solutions?",
            answer: "Yes, we work with professional teams and organizations to create custom racing simulation solutions. Contact us for more information."
        }
    ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Have questions? We're here to help! Get in touch with our expert team for support,
                        sales inquiries, or any other questions you might have.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <MessageCircle className="h-5 w-5 mr-2" />
                                    Send us a Message
                                </CardTitle>
                                <CardDescription>
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name *</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Enter your full name"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email Address *</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject *</Label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder="What's this about?"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="category">Category *</Label>
                                        <Select value={formData.category} onValueChange={handleSelectChange}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {supportCategories.map((category) => (
                                                    <SelectItem key={category.value} value={category.value}>
                                                        {category.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message *</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Tell us more about your inquiry..."
                                            rows={6}
                                            required
                                        />
                                    </div>

                                    <Button type="submit" className="w-full" size="lg">
                                        <Send className="h-4 w-4 mr-2" />
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        {/* Contact Cards */}
                        {contactInfo.map((info, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-primary/10 rounded-full p-3">
                                            <info.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold mb-1">{info.title}</h3>
                                            <p className="text-sm text-muted-foreground mb-2">{info.description}</p>
                                            <p className="text-sm font-medium mb-3">{info.details}</p>
                                            <Button variant="outline" size="sm">
                                                {info.action}
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        {/* Quick Support */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Headphones className="h-5 w-5 mr-2" />
                                    Quick Support
                                </CardTitle>
                                <CardDescription>
                                    Need immediate assistance?
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Button variant="outline" className="w-full justify-start">
                                    <MessageCircle className="h-4 w-4 mr-2" />
                                    Live Chat
                                </Button>
                                <Button variant="outline" className="w-full justify-start">
                                    <HelpCircle className="h-4 w-4 mr-2" />
                                    Help Center
                                </Button>
                                <Button variant="outline" className="w-full justify-start">
                                    <Star className="h-4 w-4 mr-2" />
                                    Schedule Call
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {faqs.map((faq, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-3">{faq.question}</h3>
                                    <p className="text-muted-foreground">{faq.answer}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-foreground text-center mb-8">
                        Find Us
                    </h2>
                    <Card>
                        <CardContent className="p-0">
                            <div className="bg-muted/50 h-64 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                                    <p className="text-muted-foreground">Interactive map would be displayed here</p>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        123 Racing Street, Speed City, SC 12345
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-muted/50 rounded-lg p-8 text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                        Still Have Questions?
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Our customer support team is here to help you find the perfect racing setup.
                        Don't hesitate to reach out!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg">
                            <Phone className="h-4 w-4 mr-2" />
                            Call Us Now
                        </Button>
                        <Button variant="outline" size="lg">
                            <Mail className="h-4 w-4 mr-2" />
                            Email Support
                        </Button>
                    </div>
        </div>
    </div>
  );
};

export default Contact;
