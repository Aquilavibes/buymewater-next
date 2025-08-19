"use client"

import type React from "react"

import { useState } from "react"
import { DashboardLayout } from "@/app/components/dashboard-layout"
import { Check, Trash2 } from "lucide-react"

interface AccountSettings {
  email: string
  username: string
}

interface NotificationSetting {
  label: string
  description: string
  enabled: boolean
}

interface NotificationSettings {
  newDonation: NotificationSetting
  weeklyReport: NotificationSetting
  productUpdates: NotificationSetting
}

export default function Settings() {
  const [accountSettings, setAccountSettings] = useState<AccountSettings>({
    email: "alex.chen@example.com",
    username: "alexchen",
  })

  const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>({
    newDonation: {
      label: "New Donations",
      description: "Receive a notification when you get a new donation.",
      enabled: true,
    },
    weeklyReport: {
      label: "Weekly Report",
      description: "Get a summary of your earnings and activity every week.",
      enabled: false,
    },
    productUpdates: {
      label: "Product Updates",
      description: "Stay informed about new features and improvements.",
      enabled: true,
    },
  })

  const updateAccountSetting = (field: keyof AccountSettings, value: string) => {
    setAccountSettings((prev) => ({ ...prev, [field]: value }))
  }

  const toggleNotificationSetting = (key: keyof NotificationSettings) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [key]: { ...prev[key], enabled: !prev[key].enabled },
    }))
  }

  const saveAccountSettings = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Saving account settings:", accountSettings)
    alert("Account settings saved successfully!")
  }

  const saveNotificationSettings = () => {
    console.log("Saving notification settings:", notificationSettings)
    alert("Notification settings saved successfully!")
  }

  const deleteAccount = () => {
    if (confirm("Are you absolutely sure you want to delete your account? This action cannot be undone.")) {
      console.log("Deleting account...")
      alert("Account deleted.")
      // Implement actual account deletion logic here
    }
  }

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-white mb-6">Settings</h1>

      {/* Account Settings Section */}
      <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-sky-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Account Information</h3>
        <form onSubmit={saveAccountSettings} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={accountSettings.email}
              onChange={(e) => updateAccountSetting("email", e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-sky-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50"
              required
            />
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={accountSettings.username}
              onChange={(e) => updateAccountSetting("username", e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-sky-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-black font-medium rounded-lg transition-colors flex items-center space-x-2"
            >
              <Check className="h-5 w-5" />
              <span>Save Account Settings</span>
            </button>
          </div>
        </form>
      </div>

      {/* Notification Settings Section */}
      <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-sky-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Notification Preferences</h3>
        <div className="space-y-4">
          {Object.entries(notificationSettings).map(([key, setting]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <p className="font-medium text-white">{setting.label}</p>
                <p className="text-sm text-gray-400">{setting.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={setting.enabled}
                  onChange={() => toggleNotificationSetting(key as keyof NotificationSettings)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600" />
              </label>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={saveNotificationSettings}
            className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-black font-medium rounded-lg transition-colors flex items-center space-x-2"
          >
            <Check className="h-5 w-5" />
            <span>Save Notifications</span>
          </button>
        </div>
      </div>

      {/* Security Settings Section */}
      <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-sky-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Security</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-white">Two-Factor Authentication (2FA)</p>
              <p className="text-sm text-gray-400">Add an extra layer of security to your account.</p>
            </div>
            <button className="px-4 py-2 bg-sky-500/10 text-sky-400 rounded-lg hover:bg-sky-500/20 transition-colors">
              Enable 2FA
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-white">Change Password</p>
              <p className="text-sm text-gray-400">Update your account password.</p>
            </div>
            <button className="px-4 py-2 bg-sky-500/10 text-sky-400 rounded-lg hover:bg-sky-500/20 transition-colors">
              Change Password
            </button>
          </div>
        </div>
      </div>

      {/* Integrations Section */}
      <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-sky-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Integrations</h3>
        <p className="text-gray-400 mb-4">Connect your BuyMeWater account with other services.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50 border border-gray-700">
            <div className="flex items-center space-x-3">
              <img src="/placeholder.svg?height=32&width=32" alt="Discord" className="h-8 w-8" />
              <p className="font-medium text-white">Discord</p>
            </div>
            <button className="px-4 py-2 bg-sky-500/10 text-sky-400 rounded-lg hover:bg-sky-500/20 transition-colors">
              Connect
            </button>
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50 border border-gray-700">
            <div className="flex items-center space-x-3">
              <img src="/placeholder.svg?height=32&width=32" alt="Twitch" className="h-8 w-8" />
              <p className="font-medium text-white">Twitch</p>
            </div>
            <button className="px-4 py-2 bg-sky-500/10 text-sky-400 rounded-lg hover:bg-sky-500/20 transition-colors">
              Connect
            </button>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-gradient-to-br from-red-900/20 via-red-800/10 to-red-900/20 backdrop-blur-xl border border-red-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-red-400 mb-4">Danger Zone</h3>
        <p className="text-red-300 mb-6">Proceed with caution. These actions are irreversible.</p>
        <button
          onClick={deleteAccount}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors flex items-center space-x-2"
        >
          <Trash2 className="h-5 w-5" />
          <span>Delete Account</span>
        </button>
      </div>
    </DashboardLayout>
  )
}
