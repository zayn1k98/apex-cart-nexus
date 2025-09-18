import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  ArrowLeft, 
  CreditCard,
  Truck,
  Shield,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";
import racingWheelImg from "@/assets/products/racing-wheel.jpg";
import racingSeatImg from "@/assets/products/racing-seat.jpg";
import monitorStandImg from "@/assets/products/monitor-stand.jpg";
import pedalSetImg from "@/assets/products/pedal-set.jpg";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Professional Racing Wheel Pro X1",
      price: 299.99,
      originalPrice: 399.99,
      image: racingWheelImg,
      quantity: 1,
      category: "Racing Wheels",
      isOnSale: true
    },
    {
      id: "2",
      name: "Elite Simulator Racing Seat",
      price: 599.99,
      originalPrice: 799.99,
      image: racingSeatImg,
      quantity: 1,
      category: "Racing Seats",
      isOnSale: true
    },
    {
      id: "3",
      name: "Triple Monitor Racing Stand",
      price: 199.99,
      originalPrice: 249.99,
      image: monitorStandImg,
      quantity: 2,
      category: "Accessories",
      isOnSale: true
    },
    {
      id: "4",
      name: "Hydraulic Pedal Set Pro",
      price: 149.99,
      originalPrice: 199.99,
      image: pedalSetImg,
      quantity: 1,
      category: "Pedals",
      isOnSale: true
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const moveToWishlist = (id: string) => {
    // Handle move to wishlist logic
    console.log("Move to wishlist:", id);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => 
    sum + ((item.originalPrice - item.price) * item.quantity), 0
  );
  const shipping = subtotal > 500 ? 0 : 29.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Link to="/shop">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Shopping Cart</h1>
            <p className="text-muted-foreground">
              {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <ShoppingCart className="h-6 w-6 text-primary" />
          <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground mb-6">
                  Looks like you haven't added any items to your cart yet.
                </p>
                <Link to="/shop">
                  <Button size="lg">
                    Start Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex">
                    {/* Product Image */}
                    <div className="w-32 h-32 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-1 p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {item.category}
                            </Badge>
                            {item.isOnSale && (
                              <Badge variant="destructive" className="text-xs">
                                Sale
                              </Badge>
                            )}
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                          <div className="flex items-center space-x-2 mb-4">
                            <span className="text-xl font-bold text-primary">
                              ${item.price.toFixed(2)}
                            </span>
                            {item.originalPrice > item.price && (
                              <span className="text-sm text-muted-foreground line-through">
                                ${item.originalPrice.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => moveToWishlist(item.id)}
                            className="text-muted-foreground hover:text-primary"
                          >
                            <Heart className="h-4 w-4 mr-1" />
                            Save for later
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              {savings > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Savings</span>
                  <span>-${savings.toFixed(2)}</span>
                </div>
              )}
              
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-green-600">Free</span>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              
              <Separator />
              
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              {subtotal < 500 && (
                <div className="bg-muted/50 rounded-lg p-3 text-sm">
                  <div className="flex items-center text-green-600 mb-1">
                    <Truck className="h-4 w-4 mr-1" />
                    Free shipping on orders over $500
                  </div>
                  <div className="text-muted-foreground">
                    Add ${(500 - subtotal).toFixed(2)} more to qualify for free shipping
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Checkout Button */}
          <Button size="lg" className="w-full">
            <CreditCard className="h-4 w-4 mr-2" />
            Proceed to Checkout
          </Button>

          {/* Security Badge */}
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span>Secure checkout with SSL encryption</span>
          </div>

          {/* Promo Code */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Promo Code</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Input placeholder="Enter promo code" className="flex-1" />
                <Button variant="outline">Apply</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
