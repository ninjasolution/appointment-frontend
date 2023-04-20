export const BACKEND_LINK = "http://localhost:5000"

export const CATEGORY_TYPE_SERVICE = "service"

export const SERVICE_TARGET = {
    0: "Everyone",
    1: "Females only",
    2: "Males only"
}

export const genderByIndex = {
    "0": "Male",
    "1": "Female",
    "2": "Non-binary",
    "3": "Prefer no to say"
}

export const permissionByIndex = {
    "0": "no access",
    "1": "Basic",
    "2": "Low",
    "3": "Medium",
    "4": "High",
}

export const calendarColorByIndex = {
    "0": "rgb(255, 156, 187)",
    "1": "rgb(226, 166, 230)",
    "2": "rgb(187, 193, 232)",
    "3": "rgb(129, 188, 255)",
    "4": "rgb(145, 227, 238)",
    "5": "rgb(108, 213, 203)",
    "6": "rgb(166, 229, 189)",
    "7": "rgb(231, 242, 134)",
    "8": "rgb(255, 236, 120)",
    "9": "rgb(255, 191, 105)",
}

export const basicBgColorByIndex = {
    "0": "rgb(11, 109, 217)",
    "1": "rgb(16, 25, 40)",
    "2": "rgb(0, 157, 98)",
    "3": "rgb(237, 176, 27)",
    "4": "rgb(190, 74, 244)",
}

export const timesByIndex = {
    "0": {
        "value": 5,
        "label": "5min"
    },
    "1": {
        "value": 10,
        "label": "10min"
    },
    "2": {
        "value": 15,
        "label": "15min"
    },
    "3": {
        "value": 20,
        "label": "20min"
    },
    "4": {
        "value": 25,
        "label": "25min"
    },
    "5": {
        "value": 30,
        "label": "30min"
    },
    "6": {
        "value": 35,
        "label": "35min"
    },
    "7": {
        "value": 40,
        "label": "40min"
    },
    "8": {
        "value": 45,
        "label": "45min"
    },
    "9": {
        "value": 50,
        "label": "50min"
    },
    "10": {
        "value": 55,
        "label": "55min"
    },
    "11": {
        "value": 60,
        "label": "1h"
    },
    "12": {
        "value": 65,
        "label": "1h 5min"
    },
    "13": {
        "value": 70,
        "label": "1h 10min"
    },
    "14": {
        "value": 75,
        "label": "1h 15min"
    },
    "15": {
        "value": 80,
        "label": "1h 20min"
    },
    "16": {
        "value": 85,
        "label": "1h 25min"
    },
    "17": {
        "value": 90,
        "label": "1h 30min"
    },
    "18": {
        "value": 95,
        "label": "1h 35min"
    },
    "19": {
        "value": 100,
        "label": "1h 40min"
    },
    "20": {
        "value": 105,
        "label": "1h 45min"
    },
    "21": {
        "value": 110,
        "label": "1h 50min"
    },
    "22": {
        "value": 115,
        "label": "1h 55min"
    },
    "23": {
        "value": 120,
        "label": "2h"
    },
    "24": {
        "value": 135,
        "label": "2h 15min"
    },
    "25": {
        "value": 150,
        "label": "2h 30min"
    },
    "26": {
        "value": 165,
        "label": "2h 45min"
    },
    "27": {
        "value": 180,
        "label": "3h"
    },
    "28": {
        "value": 195,
        "label": "3h 15min"
    },
    "29": {
        "value": 210,
        "label": "3h 30min"
    },
    "30": {
        "value": 225,
        "label": "3h 45min"
    },
    "31": {
        "value": 240,
        "label": "4h"
    },
    "32": {
        "value": 270,
        "label": "4h 30min"
    },
    "33": {
        "value": 300,
        "label": "5h"
    },
    "34": {
        "value": 330,
        "label": "5h 30min"
    },
    "35": {
        "value": 360,
        "label": "6h"
    },
    "36": {
        "value": 390,
        "label": "6h 30min"
    },
    "38": {
        "value": 420,
        "label": "7h"
    },
    "39": {
        "value": 450,
        "label": "7h 30min"
    },
    "40": {
        "value": 480,
        "label": "8h"
    },
    "41": {
        "value": 540,
        "label": "9h"
    },
    "42": {
        "value": 600,
        "label": "10h"
    },
    "43": {
        "value": 660,
        "label": "11h"
    },
    "44": {
        "value": 720,
        "label": "12h"
    },
}

export const membershipDurationByIndex = {
    "0": {
        "value": 7,
        "label": "7 days"
    },
    "1": {
        "value": 14,
        "label": "14 days"
    },
    "2": {
        "value": 30,
        "label": "1 month"
    },
    "3": {
        "value": 30 * 2,
        "label": "2 months"
    },
    "4": {
        "value": 30 * 3,
        "label": "3 months"
    },
    "5": {
        "value": 30 * 4,
        "label": "4 months"
    },
    "6": {
        "value": 30 * 6,
        "label": "6 months"
    },
    "7": {
        "value": 30 * 8,
        "label": "8 months"
    },
    "8": {
        "value": 365,
        "label": "1 year"
    },
    "9": {
        "value": 30 * 18,
        "label": "18 months"
    },
    "10": {
        "value": 365 * 2,
        "label": "2 years"
    },
    "11": {
        "value": 365 * 5,
        "label": "5 years"
    }
}

export const priceTypeByIndex = {
    "0": "Free",
    "1": "From",
    "2": "Fixed"
}

export const numberOfSale = [10, 20, 30, 50, 100, 250, 500, 1000]