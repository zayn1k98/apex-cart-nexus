import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Linkedin,
    ArrowRight,
    Shield,
    Truck,
    Headphones,
    Award
} from "lucide-react";
import logo from "@/assets/logos/logo.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        shop: [
            { name: "Racing Wheels", href: "/shop?category=wheels" },
            { name: "Racing Seats", href: "/shop?category=seats" },
            { name: "Pedal Sets", href: "/shop?category=pedals" },
            { name: "Accessories", href: "/shop?category=accessories" },
            { name: "Cockpits", href: "/shop?category=cockpits" },
            { name: "All Products", href: "/shop" }
        ],
        support: [
            { name: "Help Center", href: "/help" },
            { name: "Contact Us", href: "/contact" },
            { name: "Shipping Info", href: "/shipping" },
            { name: "Returns & Exchanges", href: "/returns" },
            { name: "Warranty", href: "/warranty" },
            { name: "Technical Support", href: "/support" }
        ],
        company: [
            { name: "About Us", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Press", href: "/press" },
            { name: "Partnerships", href: "/partnerships" },
            { name: "Investor Relations", href: "/investors" },
            { name: "Sustainability", href: "/sustainability" }
        ],
        legal: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
            { name: "Cookie Policy", href: "/cookies" },
            { name: "Refund Policy", href: "/refunds" },
            { name: "Accessibility", href: "/accessibility" },
            { name: "Sitemap", href: "/sitemap" }
        ]
    };

    const socialLinks = [
        { name: "Facebook", icon: Facebook, href: "https://facebook.com/9t7racing" },
        { name: "Twitter", icon: Twitter, href: "https://twitter.com/9t7racing" },
        { name: "Instagram", icon: Instagram, href: "https://instagram.com/9t7racing" },
        { name: "YouTube", icon: Youtube, href: "https://youtube.com/9t7racing" },
        { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/9t7racing" }
    ];

    const features = [
        {
            icon: Shield,
            title: "Secure Shopping",
            description: "256-bit SSL encryption"
        },
        {
            icon: Truck,
            title: "Free Shipping",
            description: "On orders over $500"
        },
        {
            icon: Headphones,
            title: "24/7 Support",
            description: "Expert customer service"
        },
        {
            icon: Award,
            title: "2-Year Warranty",
            description: "On all products"
        }
    ];

    return (
        <footer className="bg-muted/50 border-t border-border">
            {/* Newsletter Section */}
            <div className="bg-primary/5 border-b border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            Stay Updated with 9T7 Racing Simulator
                        </h3>
                        <p className="text-muted-foreground mb-8">
                            Get the latest news, product updates, and exclusive offers delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <Input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1"
                            />
                            <Button className="whitespace-nowrap">
                                Subscribe
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-4">
                            By subscribing, you agree to our Privacy Policy and Terms of Service.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <img
                                src={logo}
                                alt="9T7 Racing Simulator Logo"
                                className="h-12 w-auto object-contain"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-foreground">9T7 Racing Simulator</h3>
                                <p className="text-sm text-muted-foreground">Professional Racing Equipment</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground mb-6 max-w-md">
                            Leading provider of professional-grade racing simulator equipment, trusted by champions worldwide. Experience the ultimate in racing simulation technology.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center space-x-3">
                                <Mail className="h-4 w-4 text-primary" />
                                <span className="text-sm text-muted-foreground">support@9t7racing.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-4 w-4 text-primary" />
                                <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span className="text-sm text-muted-foreground">123 Racing Street, Speed City, SC 12345</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <Button
                                    key={social.name}
                                    variant="ghost"
                                    size="icon"
                                    className="hover:bg-primary hover:text-primary-foreground"
                                    asChild
                                >
                                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                                        <social.icon className="h-5 w-5" />
                                    </a>
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Shop Links */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Shop</h4>
                        <ul className="space-y-3">
                            {footerLinks.shop.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Support</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Features */}
                <div className="mt-12 pt-8 border-t border-border">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <div className="bg-primary/10 rounded-full p-2">
                                    <feature.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h5 className="font-medium text-foreground text-sm">{feature.title}</h5>
                                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-sm text-muted-foreground">
                        © {currentYear} 9T7 Racing Simulator. All rights reserved.
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                        {footerLinks.legal.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
