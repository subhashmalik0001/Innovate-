import { Link, useLocation } from 'react-router-dom'
import React from 'react'
function Navigation() {
    const location = useLocation()

    const navItems = [
        { path: '/dashboard', label: 'Dashboard', icon: '🏠' },
        { path: '/startups', label: 'Startups', icon: '🚀' },
        { path: '/mentors', label: 'Mentors', icon: '🧑‍🏫' },
        { path: '/programs', label: 'Programs', icon: '📦' },
        { path: '/applications', label: 'Applications', icon: '🗂️' },
        { path: '/funding', label: 'Funding', icon: '📈' },
        { path: '/tools', label: 'Tools', icon: '🛠️' },
        { path: '/settings', label: 'Settings', icon: '⚙️' },
    ]

    return (
        <nav className="bg-white shadow-lg border-b">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <h1 className="text-xl font-bold text-gray-800">Accubate</h1>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === item.path
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                        }`}
                                >
                                    <span className="mr-2">{item.icon}</span>
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation