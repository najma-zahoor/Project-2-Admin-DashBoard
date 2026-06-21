import { useState } from 'react'
import './App.css';
import profileImage from './assets/image.jpg';
export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        <nav className="space-y-4">
          <a
            href="#"
            className="block p-3 rounded-lg hover:bg-gray-800 transition"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block p-3 rounded-lg hover:bg-gray-800 transition"
          >
            Users
          </a>
          <a
            href="#"
            className="block p-3 rounded-lg hover:bg-gray-800 transition"
          >
            Products
          </a>
          <a
            href="#"
            className="block p-3 rounded-lg hover:bg-gray-800 transition"
          >
            Settings
          </a>
        </nav>
      </aside>
      <div className="flex-1 bg-white p-6 overflow-auto">
        <header className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search"
            className="w-80 px-4 py-2 border rounded-lg"
          />
         <img
            src={profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-orange-400">
            <h3 className="text-gray-500">Total Users</h3>
            <p className="text-3xl font-bold mt-2">12,450</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-orange-400">
            <h3 className="text-gray-500">Total Sales</h3>
            <p className="text-3xl font-bold mt-2">Rs 34,500</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-orange-400">
            <h3 className="text-gray-500">Total Orders</h3>
            <p className="text-3xl font-bold mt-2">1,245</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-orange-400">
            <h3 className="text-gray-500">Revenue</h3>
            <p className="text-3xl font-bold mt-2">Rs 89,000</p>
          </div>
        </div>
        <div className="bg-white rounded-lg  p-6 border border-orange-400">
          <h2 className="text-xl text-black font-semibold mb-4">
          Recent Activity
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3">User</th>
                  <th className="p-3">Action</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ayesha</td>
                  <td className="p-3">Created Order</td>
                  <td className="p-3">21 Jun 2026</td>
                  <td className="p-3 text-green-600 font-medium">
                    Completed
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Sarah</td>
                  <td className="p-3">Updated Profile</td>
                  <td className="p-3">20 Jun 2026</td>
                  <td className="p-3 text-blue-600 font-medium">
                    Updated
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Amna</td>
                  <td className="p-3">Purchased Product</td>
                  <td className="p-3">19 Jun 2026</td>
                  <td className="p-3 text-green-600 font-medium">
                    Paid
                  </td>
                </tr>
                <tr>
                  <td className="p-3">Esha</td>
                  <td className="p-3">Deleted Item</td>
                  <td className="p-3">18 Jun 2026</td>
                  <td className="p-3 text-red-600 font-medium">
                    Removed
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
