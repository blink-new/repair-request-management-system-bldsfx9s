import React from 'react';
import { Link } from 'react-router-dom';

interface RepairRequest {
  id: string;
  description: string;
  address: string;
  status: 'New' | 'In Progress' | 'Completed' | 'Urgent';
  priority: 'Low' | 'Medium' | 'High';
  createdAt: string;
}

const dummyRequests: RepairRequest[] = [
  {
    id: '1',
    description: 'Leaky faucet in kitchen',
    address: '123 Main St, Apt 4B',
    status: 'Urgent',
    priority: 'High',
    createdAt: '2024-07-20',
  },
  {
    id: '2',
    description: 'Broken window in common area',
    address: 'Building A, Lobby',
    status: 'New',
    priority: 'Medium',
    createdAt: '2024-07-19',
  },
  {
    id: '3',
    description: 'Light flickering in hallway',
    address: 'Building B, 3rd Floor Hallway',
    status: 'In Progress',
    priority: 'Low',
    createdAt: '2024-07-18',
  },
  {
    id: '4',
    description: 'Clogged toilet in bathroom',
    address: '123 Main St, Apt 2A',
    status: 'Completed',
    priority: 'High',
    createdAt: '2024-07-17',
  },
];

const RepairRequests = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Repair Requests</h1>
        <Link to="/new-request">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
            + New Request
          </button>
        </Link>
      </div>

      {/* Filter Section */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-semibold mb-3">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="building" className="block text-sm font-medium text-gray-700">Building</label>
            <select id="building" name="building" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
              <option>All</option>
              <option>Building A</option>
              <option>Building B</option>
            </select>
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
            <select id="status" name="status" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
              <option>All</option>
              <option>New</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Urgent</option>
            </select>
          </div>
          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
            <select id="priority" name="priority" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
              <option>All</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input type="date" id="date" name="date" className="mt-1 block w-full pl-3 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md" />
          </div>
        </div>
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {dummyRequests.map((request) => (
          <div key={request.id} className="bg-white p-5 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-gray-900">{request.description}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium
                ${request.status === 'Urgent' ? 'bg-red-100 text-red-800' :
                request.status === 'New' ? 'bg-blue-100 text-blue-800' :
                request.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'}
              `}>
                {request.status}
              </span>
            </div>
            <p className="text-gray-600 mb-1"><strong>Address:</strong> {request.address}</p>
            <p className="text-gray-600 mb-1"><strong>Priority:</strong> {request.priority}</p>
            <p className="text-gray-600 text-sm">Created: {request.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepairRequests;
