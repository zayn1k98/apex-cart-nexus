import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, FileText } from "lucide-react";
import logo from "@/assets/logos/logo.png";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock order data - in a real app, this would be fetched by ID
  const order = {
    id: id || "#1024",
    customer: "Alex Rider",
    email: "alex.rider@email.com",
    phone: "+1 (555) 123-4567",
    product: "Racing Wheel Pro X1",
    category: "Wheels",
    price: 299.99,
    originalPrice: 399.99,
    discount: 100.00,
    status: "Pending",
    date: "2024-01-15",
    shippingAddress: {
      street: "123 Racing Street",
      city: "Speed City",
      state: "CA",
      zip: "90210",
      country: "United States"
    },
    billingAddress: {
      street: "123 Racing Street", 
      city: "Speed City",
      state: "CA",
      zip: "90210",
      country: "United States"
    }
  };

  const generatePDFInvoice = () => {
    // Create a new window for PDF generation
    const printWindow = window.open('', '_blank');
    
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Invoice ${order.id}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
              background: white;
            }
            .header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 30px;
              border-bottom: 2px solid #e5e7eb;
              padding-bottom: 20px;
            }
            .logo {
              height: 60px;
              width: auto;
            }
            .company-info h1 {
              color: #dc2626;
              margin: 0;
              font-size: 24px;
            }
            .company-info p {
              margin: 5px 0;
              color: #6b7280;
            }
            .invoice-title {
              text-align: right;
            }
            .invoice-title h2 {
              color: #1f2937;
              margin: 0;
              font-size: 28px;
            }
            .invoice-title p {
              margin: 5px 0;
              color: #6b7280;
            }
            .content {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 40px;
              margin-bottom: 30px;
            }
            .section h3 {
              color: #1f2937;
              margin-bottom: 15px;
              font-size: 18px;
              border-bottom: 1px solid #e5e7eb;
              padding-bottom: 5px;
            }
            .section p {
              margin: 5px 0;
              color: #374151;
            }
            .items-table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 30px;
            }
            .items-table th,
            .items-table td {
              padding: 12px;
              text-align: left;
              border-bottom: 1px solid #e5e7eb;
            }
            .items-table th {
              background-color: #f9fafb;
              color: #374151;
              font-weight: 600;
            }
            .items-table .text-right {
              text-align: right;
            }
            .totals {
              margin-left: auto;
              width: 300px;
            }
            .totals table {
              width: 100%;
            }
            .totals td {
              padding: 8px 0;
            }
            .totals .total-row {
              border-top: 2px solid #e5e7eb;
              font-weight: bold;
              font-size: 18px;
              color: #dc2626;
            }
            .status-badge {
              display: inline-block;
              padding: 4px 12px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: 600;
              text-transform: uppercase;
            }
            .status-pending {
              background-color: #fef3c7;
              color: #92400e;
            }
            .status-accepted {
              background-color: #d1fae5;
              color: #065f46;
            }
            .status-declined {
              background-color: #fee2e2;
              color: #991b1b;
            }
            .footer {
              margin-top: 50px;
              text-align: center;
              color: #6b7280;
              border-top: 1px solid #e5e7eb;
              padding-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="company-info">
              <img src="${logo}" alt="9T7 Racing" class="logo" />
              <h1>9T7 Racing Simulator</h1>
              <p>Professional Racing Equipment</p>
              <p>Email: info@9t7racing.com</p>
              <p>Phone: +1 (555) 9T7-RACE</p>
            </div>
            <div class="invoice-title">
              <h2>INVOICE</h2>
              <p>Invoice #: ${order.id}</p>
              <p>Date: ${order.date}</p>
              <p>Status: <span class="status-badge status-${order.status.toLowerCase()}">${order.status}</span></p>
            </div>
          </div>

          <div class="content">
            <div>
              <div class="section">
                <h3>Bill To</h3>
                <p><strong>${order.customer}</strong></p>
                <p>${order.billingAddress.street}</p>
                <p>${order.billingAddress.city}, ${order.billingAddress.state} ${order.billingAddress.zip}</p>
                <p>${order.billingAddress.country}</p>
                <p>Email: ${order.email}</p>
                <p>Phone: ${order.phone}</p>
              </div>
            </div>
            <div>
              <div class="section">
                <h3>Ship To</h3>
                <p><strong>${order.customer}</strong></p>
                <p>${order.shippingAddress.street}</p>
                <p>${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zip}</p>
                <p>${order.shippingAddress.country}</p>
              </div>
            </div>
          </div>

          <table class="items-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Category</th>
                <th class="text-right">Price</th>
                <th class="text-right">Discount</th>
                <th class="text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${order.product}</td>
                <td>${order.category}</td>
                <td class="text-right">$${order.originalPrice.toFixed(2)}</td>
                <td class="text-right">-$${order.discount.toFixed(2)}</td>
                <td class="text-right">$${order.price.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>

          <div class="totals">
            <table>
              <tr>
                <td>Subtotal:</td>
                <td class="text-right">$${order.originalPrice.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Discount:</td>
                <td class="text-right">-$${order.discount.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Shipping:</td>
                <td class="text-right">$0.00</td>
              </tr>
              <tr>
                <td>Tax:</td>
                <td class="text-right">$0.00</td>
              </tr>
              <tr class="total-row">
                <td>Total:</td>
                <td class="text-right">$${order.price.toFixed(2)}</td>
              </tr>
            </table>
          </div>

          <div class="footer">
            <p>Thank you for choosing 9T7 Racing Simulator!</p>
            <p>For support, contact us at support@9t7racing.com</p>
            <p>This invoice was generated on ${new Date().toLocaleDateString()}</p>
          </div>
        </body>
        </html>
      `);
      
      printWindow.document.close();
      
      // Wait for content to load, then print
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate(-1)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Orders
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Order Details</h1>
          <p className="text-muted-foreground">Order #{order.id}</p>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        {/* Order Information */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Order ID</label>
                  <p className="text-lg font-semibold">{order.id}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Status</label>
                  <div className="mt-1">
                    <Badge variant={order.status === "Accepted" ? "default" : order.status === "Pending" ? "secondary" : "destructive"}>
                      {order.status}
                    </Badge>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Date</label>
                  <p>{order.date}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Total Amount</label>
                  <p className="text-lg font-semibold text-primary">${order.price.toFixed(2)}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Product Name</label>
                  <p className="text-lg font-semibold">{order.product}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Category</label>
                  <p>{order.category}</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Original Price</label>
                    <p className="line-through">${order.originalPrice.toFixed(2)}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Discount</label>
                    <p className="text-green-600">-${order.discount.toFixed(2)}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Final Price</label>
                    <p className="text-lg font-semibold text-primary">${order.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Billing Address</h4>
                  <div className="space-y-1 text-sm">
                    <p><strong>{order.customer}</strong></p>
                    <p>{order.billingAddress.street}</p>
                    <p>{order.billingAddress.city}, {order.billingAddress.state} {order.billingAddress.zip}</p>
                    <p>{order.billingAddress.country}</p>
                    <p className="mt-2">Email: {order.email}</p>
                    <p>Phone: {order.phone}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Shipping Address</h4>
                  <div className="space-y-1 text-sm">
                    <p><strong>{order.customer}</strong></p>
                    <p>{order.shippingAddress.street}</p>
                    <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</p>
                    <p>{order.shippingAddress.country}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                onClick={generatePDFInvoice}
                className="w-full"
                variant="default"
              >
                <FileText className="mr-2 h-4 w-4" />
                Generate PDF Invoice
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Export Order Data
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${order.originalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount:</span>
                  <span className="text-green-600">-${order.discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span className="text-primary">${order.price.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
