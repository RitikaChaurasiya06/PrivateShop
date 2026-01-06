package com.privateshop

import android.content.Context
import android.provider.Settings

object AccessibilityUtil {

    fun isAccessibilityEnabled(context: Context): Boolean {
        val service =
            context.packageName + "/" + AppLockService::class.java.canonicalName

        val enabledServices = Settings.Secure.getString(
            context.contentResolver,
            Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES
        )

        return enabledServices?.contains(service) == true
    }
}