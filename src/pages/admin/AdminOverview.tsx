import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, ShoppingCart, Package } from "lucide-react";

const AdminOverview = () => {
  const trafficData = {
    daily: { visitors: 1247, change: 8.2 },
    monthly: { visitors: 28456, change: 12.5 }
  };

  const salesData = {
    today: { amount: 2847, orders: 12 },
    week: { amount: 18923, orders: 67 },
    month: { amount: 124480, orders: 324 }
  };

  const orders = [
    { id: "#1024", customer: "Alex Rider", product: "Racing Wheel Pro X1", status: "Pending", amount: "$249.00", date: "2024-01-15" },
    { id: "#1023", customer: "Jordan Lee", product: "Premium Pedal Set", status: "Pending", amount: "$599.00", date: "2024-01-14" },
    { id: "#1022", customer: "Sam Casey", product: "Racing Seat Elite", status: "Accepted", amount: "$129.00", date: "2024-01-13" },
    { id: "#1021", customer: "Taylor Fox", product: "Racing Wheel Pro X1", status: "Declined", amount: "$89.00", date: "2024-01-12" },
  ];

  const products = [
    { id: 1, name: "Racing Wheel Pro X1", category: "Wheels", price: 299.99, stock: 15, status: "active" },
    { id: 2, name: "Premium Pedal Set", category: "Pedals", price: 199.99, stock: 8, status: "active" },
    { id: 3, name: "Racing Seat Elite", category: "Seats", price: 449.99, stock: 3, status: "low-stock" },
  ];

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground">Complete store performance and analytics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${salesData.month.amount.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{salesData.month.orders}</div>
            <p className="text-xs text-muted-foreground">+5% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customers</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,872</div>
            <p className="text-xs text-muted-foreground">+32 new today</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Products</CardTitle>
            <Package className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{products.length}</div>
            <p className="text-xs text-muted-foreground">Active products</p>
          </CardContent>
        </Card>
      </div>

      {/* Traffic Analytics */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Daily Traffic</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{trafficData.daily.visitors.toLocaleString()}</div>
            <div className="flex items-center gap-2 mt-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-sm text-green-500">+{trafficData.daily.change}%</span>
              <span className="text-sm text-muted-foreground">from yesterday</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Monthly Traffic</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{trafficData.monthly.visitors.toLocaleString()}</div>
            <div className="flex items-center gap-2 mt-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-sm text-green-500">+{trafficData.monthly.change}%</span>
              <span className="text-sm text-muted-foreground">from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.slice(0, 5).map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>
                    <Badge variant={order.status === "Accepted" ? "default" : order.status === "Pending" ? "secondary" : "destructive"}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell className="text-right">{order.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminOverview;
