
import React from 'react';
import './index.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><i className="icon-dashboard"></i> Dashboard</li>
        <li><i className="icon-inventory"></i> Inventory</li>
        <li><i className="icon-order"></i> Order</li>
        <li><i className="icon-returns"></i> Returns</li>
        <li><i className="icon-customers"></i> Customers</li>
        <li><i className="icon-shipping"></i> Shipping</li>
        <li><i className="icon-channel"></i> Channel</li>
        <li><i className="icon-integrations"></i> Integrations</li>
        <li><i className="icon-calculators"></i> Calculators</li>
        <li><i className="icon-reports"></i> Reports</li>
        <li><i className="icon-account"></i> Account</li>
      </ul>
    </div>
  );
};

export default Sidebar;
