import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdminAnalytics = () => {
  const salesData = {
    today: { amount: 2847, orders: 12 },
    week: { amount: 18923, orders: 67 },
    month: { amount: 124480, orders: 324 }
  };

  const products = [
    { id: 1, name: "Racing Wheel Pro X1", category: "Wheels", price: 299.99, stock: 15, status: "active" },
    { id: 2, name: "Premium Pedal Set", category: "Pedals", price: 199.99, stock: 8, status: "active" },
    { id: 3, name: "Racing Seat Elite", category: "Seats", price: 449.99, stock: 3, status: "low-stock" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Sales Analytics</h1>
        <p className="text-muted-foreground">Detailed sales performance and insights</p>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Today's Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${salesData.today.amount.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground">{salesData.today.orders} orders</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${salesData.week.amount.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground">{salesData.week.orders} orders</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${salesData.month.amount.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground">{salesData.month.orders} orders</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {products.slice(0, 3).map((product, index) => (
                <div key={product.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="font-medium">{product.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">${product.price}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Direct</span>
                <span className="font-medium">45%</span>
              </div>
              <div className="flex justify-between">
                <span>Google Search</span>
                <span className="font-medium">32%</span>
              </div>
              <div className="flex justify-between">
                <span>Social Media</span>
                <span className="font-medium">15%</span>
              </div>
              <div className="flex justify-between">
                <span>Referrals</span>
                <span className="font-medium">8%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Wheels</span>
                <span className="font-medium">$45,230</span>
              </div>
              <div className="flex justify-between">
                <span>Pedals</span>
                <span className="font-medium">$28,450</span>
              </div>
              <div className="flex justify-between">
                <span>Seats</span>
                <span className="font-medium">$32,100</span>
              </div>
              <div className="flex justify-between">
                <span>Accessories</span>
                <span className="font-medium">$18,700</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Customer Demographics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Age 18-25</span>
                <span className="font-medium">25%</span>
              </div>
              <div className="flex justify-between">
                <span>Age 26-35</span>
                <span className="font-medium">40%</span>
              </div>
              <div className="flex justify-between">
                <span>Age 36-45</span>
                <span className="font-medium">25%</span>
              </div>
              <div className="flex justify-between">
                <span>Age 45+</span>
                <span className="font-medium">10%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAnalytics;
