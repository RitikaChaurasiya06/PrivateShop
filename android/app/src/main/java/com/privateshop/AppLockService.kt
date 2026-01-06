package com.privateshop

import android.accessibilityservice.AccessibilityService
import android.view.accessibility.AccessibilityEvent

class AppLockService : AccessibilityService() {

    override fun onAccessibilityEvent(event: AccessibilityEvent?) {
        // Abhi empty — later yahin app detect logic aayega
    }

    override fun onInterrupt() {
        // Required override
    }
}