// add each state I use in the different screens as a makeshift db for storing data

import conversationFocus from "@/app/conversationFocus";

export const db = {
    profile: {
        firstName: "",
        lastName: "",
        age: null,
        image: "../assets/images/profilePlacholder.png"
    },
    conversationFocus: {
        publicSpeaking: false,
        professional: false,
        academic: false,
        rizz: false
    },
    voicePreference: {
        casual: false,
        professional: false,
        romantic: false,
        other: false
    }
}