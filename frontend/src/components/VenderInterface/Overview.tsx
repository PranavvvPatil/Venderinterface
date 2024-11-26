


const Dashboard = () => {

  const orderData = [
    { id: "1023", product: "Fiddle Leaf Fig", quantity: 2, status: "Pending", deadline: "15/11/2024", action: "Process Order" },
    { id: "1024", product: "Monstera Deliciosa", quantity: 5, status: "Processing", deadline: "13/11/2024", action: "Add Tracking" },
    { id: "1025", product: "Snake Plant", quantity: 3, status: "Ready to Ship", deadline: "12/11/2024", action: "Add Tracking" },
    { id: "1026", product: "Peace Lily", quantity: 1, status: "Pending", deadline: "16/11/2024", action: "Process Order" },
    { id: "1027", product: "ZZ Plant", quantity: 4, status: "Processing", deadline: "14/11/2024", action: "Add Tracking" },
  ];

  const stockAlerts = [
    { status: "Critical", product: "Fiddle Leaf Fig", units: 3, color: "red" },
    { status: "Low", product: "Monstera Deliciosa", units: 8, color: "yellow" },
    { status: "Ample", product: "Snake Plant", units: 25, color: "green" },
    { status: "Low", product: "ZZ Plant", units: 5, color: "yellow" },
    { status: "Critical", product: "Peace Lily", units: 2, color: "red" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100 p-6 overflow-y-auto">
      
      <div className="grid grid-cols-12 gap-6">
        {/* Overview Section */}
        <div className="flex">
          
        </div>
        <header className="mb-6 ">
        <h1 className="text-2xl font-bold"></h1>
        </header>
        <div className="col-span-12 lg:col-span-4 bg-white shadow-md p-4 rounded">
          <h2 className="text-lg font-bold">Total Sales</h2>
          <p className="text-3xl font-semibold text-green-500">$3200</p>
          <p className="text-sm text-gray-500">+6% increase</p>
        </div>
        
        {/* Sales Trend Chart */}
        <div className="col-span-12 lg:col-span-8 bg-white shadow-md p-4 rounded">
          <h2 className="text-lg font-bold">Sales Trends Graph</h2>
          {/* Add chart component here */}
          <div className="h-40 bg-gray-200 rounded"></div>
        </div>

        {/* Top Performing Products */}
        <div className="col-span-12 lg:col-span-6 bg-white shadow-md p-4 rounded">
          <h2 className="text-lg font-bold">Top Performing Products</h2>
          <ul className="space-y-2">
            {/* Replace with dynamic data */}
            <li className="flex justify-between">
              <span>Product 1</span>
              <span>350 units sold</span>
            </li>
          </ul>
        </div>

    

      </div>
      <div className=" bg-gray-100 min-h-screen ">
      <div className="bg-white shadow-md rounded p-4 mb-6">
        <h2 className="text-lg font-bold mb-4">Order Fulfillment Remainders</h2>
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Order ID</th>
              <th className="p-2">Product Name</th>
              <th className="p-2">Quantity</th>
              <th className="p-2">Status</th>
              <th className="p-2">Deadline</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.product}</td>
                <td className="p-2">{order.quantity}</td>
                <td className={`p-2 text-${order.status === "Pending" ? "yellow-500" : "green-500"}`}>
                  {order.status}
                </td>
                <td className="p-2">{order.deadline}</td>
                <td className="p-2">
                  <button className="text-white bg-blue-500 px-3 py-1 rounded">
                    {order.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white shadow-md rounded p-4 mb-6">
        <h2 className="text-lg font-bold mb-4">Low Stock Alerts</h2>
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Status</th>
              <th className="p-2">Product Name</th>
              <th className="p-2">Units Left</th>
              <th className="p-2">Stock Update</th>
            </tr>
          </thead>
          <tbody>
            {stockAlerts.map((alert, index) => (
              <tr key={index} className="border-b">
                <td className={`p-2 text-${alert.color}-500`}>{alert.status}</td>
                <td className="p-2">{alert.product}</td>
                <td className="p-2">{alert.units}</td>
                <td className="p-2">
                  <button className="text-blue-500 underline">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-green-100 border-dashed border-2 border-green-500 rounded p-6 flex justify-center items-center">
        <div>
          <p className="text-center text-green-500 font-semibold mb-2">Bulk Upload</p>
          <p className="text-center text-gray-600">Upload or Edit multiple items</p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Upload</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;