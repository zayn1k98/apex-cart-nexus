import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Eye, Check, X } from "lucide-react";

const AdminOrders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([
    { id: "#1024", customer: "Alex Rider", product: "Racing Wheel Pro X1", status: "Pending", amount: "$249.00", date: "2024-01-15" },
    { id: "#1023", customer: "Jordan Lee", product: "Premium Pedal Set", status: "Pending", amount: "$599.00", date: "2024-01-14" },
    { id: "#1022", customer: "Sam Casey", product: "Racing Seat Elite", status: "Accepted", amount: "$129.00", date: "2024-01-13" },
    { id: "#1021", customer: "Taylor Fox", product: "Racing Wheel Pro X1", status: "Declined", amount: "$89.00", date: "2024-01-12" },
  ]);

  const acceptOrder = (id: string) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: "Accepted" } : o));
  };

  const declineOrder = (id: string) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: "Declined" } : o));
  };

  const viewOrderDetails = (orderId: string) => {
    // Remove the # symbol for the URL parameter
    const cleanId = orderId.replace('#', '');
    navigate(`/admin/orders/${cleanId}`);
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Orders Management</h1>
        <p className="text-muted-foreground">Review and manage customer orders</p>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
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
                  <TableCell>{order.amount}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" onClick={() => viewOrderDetails(order.id)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      {order.status === "Pending" && (
                        <>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => acceptOrder(order.id)}
                            className="text-green-600 hover:text-green-700 hover:bg-green-50"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => declineOrder(order.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminOrders;
